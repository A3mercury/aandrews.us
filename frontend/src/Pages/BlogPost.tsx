import { useParams } from "react-router";
import Header from "../Components/Header";

export default function BlogPost() {
    let params = useParams();
    console.log(params);

    return (
        <div>
            <Header />

            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
                <h1 className="text-4xl font-bold">
                    Some Title for a Blog Post Entry
                </h1>
                <p className="text-gray-400 text-[9pt]">14 February, 2025 • 6 min</p>

                <p className="text-gray-400 text-[8pt] mt-16">CHAPTER 1</p>
                <h2 className="text-xl font-medium">
                    So what are we even talking about?
                </h2>
                <p className="text-[10pt]/8 py-2 font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nibh urna. Aenean mattis porta scelerisque. Ut porta rutrum nisl, sed condimentum justo rutrum nec. Proin nec molestie mi. Maecenas in odio eu felis volutpat pretium pharetra vel risus. Nunc ultrices pellentesque ipsum nec vehicula. Donec pretium at nisl a eleifend. Maecenas at fermentum lorem. Aenean ut tincidunt ipsum. Mauris nec gravida elit. Duis porta vel massa vel sagittis. Mauris condimentum, tortor a dictum pulvinar, tellus dui scelerisque orci, a porttitor arcu lacus quis dolor. In consectetur faucibus sodales. Integer mauris libero, vestibulum et elit ac, ornare mollis ipsum. Nunc at ultricies turpis.</p>
                <p className="text-[10pt]/8 py-2 font-serif">Nunc efficitur orci turpis, et bibendum elit venenatis at. Morbi aliquam aliquam sollicitudin. Praesent pretium eleifend erat vel cursus. Sed sollicitudin rutrum aliquam. Sed varius vel odio eu volutpat. Donec commodo sollicitudin sem, dignissim porta metus tristique eu. Nulla vitae massa nec nisi gravida tincidunt eu vitae orci. Etiam a porta nibh. Phasellus eget rhoncus turpis. Fusce viverra magna vitae leo tempus laoreet quis non ex. Quisque placerat dapibus gravida. Donec a luctus felis, sed mattis ipsum. Ut ut odio rutrum, cursus nisi nec, elementum sapien.</p>

                <div className="flex mt-20">
                    <div className="bg-gray-200 p-3 rounded-xl mr-6 text-[9pt] font-semibold">web development</div>
                    <div className="bg-gray-200 p-3 rounded-xl mr-6 text-[9pt] font-semibold">cryptography</div>
                </div>
            </div>
        </div>
    );
}
