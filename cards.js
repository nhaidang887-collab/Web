const cards = [
  {
    "type": "event",
    "name": "A moment of Hope\nKhoảnh Khắc Hy Vọng",
    "subtitle": null,
    "text": "​   Một cảm giác bình yên đến lạ thường bao trùm căn phòng này. Có vẻ như một thế lực nào đó đang âm thầm chống lại sự tà ác của ngôi nhà.\n   ​Đặt token Chúc Phúc (Blessing) vào phòng này.\nKhi ở trong phòng này, mỗi anh hùng được đổ thêm 1 xúc xắc (tối đa 8) cho tất cả các lượt kiểm tra chỉ số."
  },
  {
    "type": "event",
    "name": "Thực thể Phẫn nộ",
    "subtitle": null,
    "text": "​   Nó hiện ra từ lớp dịch nhầy trên bức tường ngay cạnh bạn.\n   Bạn phải thực hiện một lượt đổ xúc xắc Tốc độ:\n​5+  Bạn thoát khỏi đó. Nhận 1 Tốc độ.\n​2-4  Chịu 1 xúc xắc sát thương tinh thần.\n​0-1  Chịu 1 xúc xắc sát thương tinh thần và 1 xúc xắc sát thương vật lý."
  },
  {
    "type": "event",
    "name": "Tiếng Bước Chân",
    "subtitle": null,
    "text": "Những tấm ván sàn kêu răng rắc chậm rãi. Bụi bay lên. Những dấu chân xuất hiện trên sàn nhà bẩn thỉu. Và rồi, ngay khi chúng chạm đến chỗ bạn, chúng biến mất.\n   Đổ 1 xúc xắc. (Nhà thám hiểm đang ở trong Nhà Thờ (Chapel) được đổ thêm 1 xúc xắc cho lượt này)\n4  Bạn và nhà thám hiểm gần nhất nhận 1 Sức mạnh.\n3  Bạn nhận thêm 1 Sức mạnh, và nhà thám hiểm gần nhất mất 1 Tỉnh táo.\n2  Mất 1 Tỉnh táo.\n1  Mất 1 Tốc độ.\n0  Mỗi nhà thám hiểm mất 1 điểm từ một chỉ số tùy chọn."
  },
  {
    "type": "event",
    "name": "Tang Lễ",
    "subtitle": null,
    "text": "​   Bạn nhìn thấy một chiếc quan tài đang mở.\nChính bạn đang nằm bên trong đó.\n   Bạn phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​4+  Bạn chớp mắt, và nó biến mất. Nhận 1 Tỉnh táo.\n​2-3  Ảo ảnh này làm bạn bối rối. Mất 1 Tỉnh táo.\n​0-1  Bạn thực sự đang nằm trong chiếc quan tài đó. Mất 1 Tỉnh táo và 1 Sức mạnh trong khi bạn tự đào đất để thoát ra ngoài. Nếu Nghĩa Địa (Graveyard) hoặc Nhà Mồ (Crypt) đã được tìm thấy, hãy đặt nhà thám hiểm của bạn vào một trong hai phòng đó (bạn được chọn phòng)."
  },
  {
    "type": "event",
    "name": "Đất Mồ",
    "subtitle": null,
    "text": "​   Căn phòng này bị bao phủ bởi một lớp bụi đất dày đặc. Bạn ho sặc sụa khi bụi đất bám đầy lên da và chui tọt vào phổi.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Sức mạnh:\n​4+  Bạn rũ sạch được lớp bụi. Nhận thêm 1 Sức mạnh.\n​0-3  Có điều gì đó không ổn. Hãy giữ lá bài này. Bạn phải chịu 1 điểm sát thương vật lý vào đầu mỗi lượt của mình.\n​   Bỏ lá bài này nếu có một thẻ Vật phẩm giúp tăng bất kỳ chỉ số nào của bạn, hoặc nếu bạn kết thúc lượt của mình tại Ban Công (Balcony), Sân Vườn (Gardens), Nghĩa Địa (Graveyard), Phòng Thể Dục (Gymnasium), Kho Lương Thực (Larder), Mái Hiên (Patio), hoặc Tòa Tháp (Tower)."
  },
  {
    "type": "event",
    "name": "Người Làm Vườn",
    "subtitle": null,
    "text": "Bạn quay lại và nhìn thấy một người đàn ông trong bộ đồ làm vườn. Hắn ta giơ xẻng lên và lao vút tới bạn. Ngay khoảnh khắc hắn gần chạm vào khuôn mặt bạn, hắn ta đột nhiên biển mất, chỉ còn lại những dấu chân đầy bùn đất và không còn gì nữa.\n   Bạn phải thực hiện một lượt đổ xúc xắc Trí tuệ (Một nhà thám hiểm đang ở trong Sân Vườn (Gardens) sẽ đổ ít hơn 2 xúc xắc cho lượt này):\n4+  Bạn tìm thấy thứ gì đó trong bùn. Rút một thẻ Vật phẩm.\n0-3  Người Làm Vườn lại xuất hiện và dùng xẻng đập thẳng vào mặt bạn. Người chơi bên phải bạn sẽ đổ xúc xắc tấn công với Sức mạnh 4 cho Người Làm Vườn. Bạn phòng thủ trước đòn tấn công này như bình thường bằng cách đổ số xúc xắc bằng với Sức mạnh của mình."
  },
  {
    "type": "event",
    "name": "Những Xác Treo",
    "subtitle": null,
    "text": "​Một làn gió lạnh lẽo thổi qua căn phòng.\nTrước mắt bạn, ba người đàn ông đang treo lơ lửng trên những sợi dây thừng sờn cũ. Họ nhìn trừng trừng vào bạn bằng đôi mắt lạnh lẽo, vô hồn.\n   Cả ba đung đưa trong im lặng rồi tan biến thành đám bụi rơi xuống đất. Bạn bắt đầu cảm thấy nghẹt thở.\n​   Bạn phải thực hiện một lượt đổ xúc xắc cho mỗi chỉ số:\n​2+  Chỉ số đó không bị ảnh hưởng.\n​0-1  Mất 1 điểm từ chỉ số đó.\n​   Nếu bạn đổ được kết quả 2+ cho tất cả các lượt đổ trên, hãy nhận thêm 1 điểm vào một chỉ số tùy chọn."
  },
  {
    "type": "event",
    "name": "Tiếng Thét Kinh Hoàng",
    "subtitle": null,
    "text": "​   Nó bắt đầu như một tiếng thì thầm, nhưng kết thúc bằng một tiếng thét xé nát tâm hồn.\n​   Mỗi nhà thám hiểm đều phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​4+  Bạn kháng cự được âm thanh đó.\n​1-3  Chịu 1 xúc xắc sát thương tinh thần.\n​0  Chịu 2 xúc xắc sát thương tinh thần.\n​   Mỗi kết quả chỉ ảnh hưởng đến chính nhà thám hiểm đang thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Hình Ảnh Trong Gương",
    "subtitle": null,
    "text": "​   Có một chiếc gương cũ trong căn phòng này. Hình ảnh phản chiếu đầy sợ hãi của chính bạn tự cử động. Bạn nhận ra đó chính là mình đến từ một thời điểm khác. Hình ảnh đó viết lên mặt gương:\n                   \"THỨ NÀY SẼ GIÚP ĐƯỢC\"\n   Sau đó, nó đưa một vật phẩm cho bạn xuyên qua mặt gương.\n​   Rút một thẻ Vật phẩm."
  },
  {
    "type": "event",
    "name": "Hình Ảnh Trong Gương",
    "subtitle": null,
    "text": "​   Nếu bạn không có bất kỳ thẻ Vật phẩm nào, sự kiện này sẽ ảnh hưởng đến nhà thám hiểm tiếp theo bên tay trái bạn có giữ thẻ Vật phẩm.\nBỏ lá bài này nếu không có nhà thám hiểm nào có thẻ Vật phẩm.\n​   Có một chiếc gương cũ trong căn phòng này. Hình ảnh phản chiếu đầy sợ hãi của chính bạn tự cử động. Bạn nhận ra đó chính là mình đến từ một thời điểm khác. Bạn cần phải giúp đỡ hình ảnh phản chiếu của mình, vì vậy bạn viết lên mặt gương:\n                    \"THỨ NÀY SẼ GIÚP ĐƯỢC\"\n   Sau đó bạn đưa một vật phẩm xuyên qua mặt gương.\n​   Chọn một trong các thẻ Vật phẩm của bạn (không phải thẻ Điềm báo) và đặt nó vào chồng bài Vật phẩm. Sau đó tráo lại chồng bài đó. Nhận 1 Trí tuệ."
  },
  {
    "type": "event",
    "name": "Định Mệnh An Bài",
    "subtitle": null,
    "text": "​   Bạn gục xuống sàn, những viễn cảnh về các sự kiện tương lai tuôn trào trong tâm trí.\n​   Chọn một trong hai lựa chọn sau\n​      • Bạn có thể xem 3 ô phòng hoặc 3 lá bài trên cùng của bất kỳ chồng bài nào. Nếu làm vậy, hãy sắp xếp lại 3 ô hoặc 3 lá bài đó theo bất kỳ thứ tự nào và đặt chúng lại lên trên cùng. Không được tiết lộ kết quả cho bất kỳ ai.\n​      • Thay vào đó, bạn có thể chọn đổ 4 xúc xắc và ghi lại kết quả đó. Đối với một lượt đổ xúc xắc bất kỳ mà bạn thực hiện trong tương lai, bạn có thể sử dụng kết quả đã ghi này thay vì phải đổ xúc xắc. Nếu con số đó cao hơn kết quả tối đa có thể đạt được của lượt đổ đó, hãy sử dụng kết quả tối đa để thay thế."
  },
  {
    "type": "event",
    "name": "Đến Lượt Jonah",
    "subtitle": null,
    "text": "​Hai cậu bé đang chơi với một con quay bằng gỗ.\n\"Cậu có muốn chơi một lượt không, Jonah?\" một đứa trẻ hỏi.\n\"Không,\" Jonah đáp, \"Tao muốn chơi tất cả các lượt.\"\nJonah giật lấy con quay và đập thẳng vào mặt cậu bé kia. Đứa trẻ ngã gục. Jonah tiếp tục đánh cậu bé khi cả hai dần tan biến khỏi tầm mắt.\n   ​Nếu một nhà thám hiểm đang giữ Hộp Câu Đố (Puzzle Box), người đó phải bỏ vật phẩm đó và rút một vật phẩm khác để thay thế.\n​   Nếu điều này xảy ra, bạn nhận thêm 1 Tỉnh táo. Nếu không, bạn phải chịu 1 xúc xắc sát thương tinh thần."
  },
  {
    "type": "event",
    "name": "Cảnh Tượng Đẫm Máu",
    "subtitle": null,
    "text": "​   Tường của căn phòng này đẫm máu. Từng giọt chảy từ trần nhà xuống vách tường, thấm qua đồ đạc và nhỏ lên giày của bạn. Nhưng chỉ trong chớp mắt, tất cả đều biến mất.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​4+  Bạn trấn tĩnh lại được. Nhận 1 Tỉnh táo.\n​2-3  Mất 1 Tỉnh táo.\n​0-1  Nếu có nhà thám hiểm hoặc quái vật nào đang ở trong phòng bạn hoặc phòng bên cạnh, bạn phải tấn công mục tiêu đó (nếu có thể).\nHãy ưu tiên chọn nhà thám hiểm có Sức mạnh thấp nhất."
  },
  {
    "type": "event",
    "name": "​                    Tắt Đèn",
    "subtitle": null,
    "text": "​Đèn pin của bạn bị hỏng.\nĐừng lo lắng, ai đó khác chắc chắn sẽ có pin dự phòng.\n   Hãy giữ lá bài này. Bạn chỉ có thể di chuyển 1 ô mỗi lượt cho đến khi bạn kết thúc lượt của mình trong cùng một phòng với một nhà thám hiểm khác. Vào cuối lượt đó, hãy bỏ lá bài này. Sau đó bạn có thể di chuyển bình thường trở lại.\n​   Bỏ lá bài này ngay lập tức nếu bạn có Cây Nến (Candle) hoặc nếu bạn kết thúc lượt của mình tại Lò Than (Furnace Room)."
  },
  {
    "type": "event",
    "name": "Két Sắt Khóa Chặt",
    "subtitle": null,
    "text": "​   Phía sau một bức chân dung là một chiếc két sắt âm tường.\nTất nhiên, nó đã bị gài bẫy.\n​Đặt token Két Sắt (Safe) vào phòng này.\n   Một lần trong lượt của một nhà thám hiểm, người đó có thể thực hiện một lượt đổ xúc xắc Trí tuệ để tìm cách mở Két Sắt:\n​5+  Rút 2 thẻ Vật phẩm và loại bỏ token Két Sắt khỏi phòng.\n​2-4  Chịu 1 xúc xắc sát thương vật lý. Két sắt không mở.\n​0-1  Chịu 2 xúc xắc sát thương vật lý. Két sắt không mở."
  },
  {
    "type": "event",
    "name": "Sương Mù Từ Những Bức Tường",
    "subtitle": null,
    "text": "​Sương mù tuôn ra từ những bức tường.\nCó những khuôn mặt ẩn hiện trong làn sương, cả mặt người và... những thứ không phải người.\n​    Mỗi nhà thám hiểm đang ở dưới hầm (Basement) phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​4+  Những khuôn mặt đó chỉ là sự đánh lừa của ánh sáng và bóng tối. Mọi chuyện đều ổn.\n​1-3  Chịu 1 xúc xắc sát thương tinh thần (và chịu thêm 1 xúc xắc sát thương nếu nhà thám hiểm đó đang ở trong một phòng có biểu tượng sự kiện).\n​0  Chịu 1 xúc xắc sát thương tinh thần (và chịu thêm 2 xúc xắc sát thương nếu nhà thám hiểm đó đang ở trong một phòng có biểu tượng sự kiện).\n​   Mỗi kết quả chỉ ảnh hưởng đến chính nhà thám hiểm đang thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Cầu Trượt Huyền Bí",
    "subtitle": null,
    "text": "​   Nếu bạn đang ở hầm (Basement), sự kiện này sẽ ảnh hưởng đến nhà thám hiểm tiếp theo bên tay trái bạn mà không ở dưới hầm.\n   Bỏ lá bài này nếu tất cả các nhà thám hiểm đều đang ở dưới hầm.\n   ​Sàn nhà sụp đổ ngay dưới chân bạn.\n   Đặt token Cầu Trượt (Slide) vào phòng này, sau đó thực hiện một lượt đổ xúc xắc Sức mạnh để sử dụng Cầu Trượt.\n​5+  Bạn kiểm soát được Cầu Trượt. Hãy đặt mình vào bất kỳ phòng đã khám phá nào ở bất kỳ tầng nào bên dưới Cầu Trượt.\n​0-4  Rút các ô phòng từ chồng bài cho đến khi bạn rút được một phòng tầng hầm. Đặt ô phòng đó vào (Nếu không còn phòng tầng hầm nào trong chồng bài, hãy chọn một phòng tầng hầm đã có trên bàn chơi). Bạn rơi xuống căn phòng đó và chịu 1 xúc xắc sát thương vật lý. Nếu không phải lượt của mình, bạn không được rút thẻ bài cho căn phòng đó.\n   Trong các lượt sau, bất kỳ nhà thám hiểm nào cũng có thể thực hiện lượt đổ này để sử dụng Cầu Trượt."
  },
  {
    "type": "event",
    "name": "Cảnh Đêm",
    "subtitle": null,
    "text": "​Bạn nhìn thấy linh hồn của một cặp đôi đang dạo bước trên sân, lặng lẽ bước đi trong bộ đồ cưới đẹp nhất của họ.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Trí tuệ:\n​5+  Bạn nhận ra những linh hồn này là những người từng cư ngụ trong ngôi nhà. Bạn gọi tên họ, họ quay lại nhìn bạn và thì thầm những bí mật đen tối của ngôi nhà. Nhận 1 Trí tuệ.\n​0-4  Bạn lùi lại trong kinh hãi, không dám nhìn tiếp."
  },
  {
    "type": "event",
    "name": "​                    Cuộc Gọi",
    "subtitle": null,
    "text": "​   Tiếng chuông điện thoại reo vang khắp căn phòng. Bạn cảm thấy có một sức mạnh vô hình thôi thúc mình phải nhấc máy trả lời.\n   Hãy đổ 2 xúc xắc. Giọng nói ngọt ngào của một bà lão vang lên bên đầu dây kia:\n​4  \"Trà và bánh ngọt nào! Trà và bánh ngọt nào! Con lúc nào cũng là đứa ta cưng nhất!\" Nhận 1 Tỉnh táo.\n​3  \"Ta luôn ở bên con mà, Pattycakes. Ta vẫn luôn dõi theo con...\" Nhận 1 Trí tuệ.\n​1-2  \"Ta đây rồi, Sweetums! Hôn ta một cái nào!\" Chịu 1 xúc xắc sát thương tinh thần.\n​0  \"Lũ trẻ hư thì phải bị trừng phạt!\" Chịu 2 xúc xắc sát thương vật lý."
  },
  {
    "type": "event",
    "name": "Chiếm Hữu",
    "subtitle": null,
    "text": "​   Một bóng đen tách ra khỏi bức tường. Khi bạn còn đang đứng sững sờ vì kinh hãi, bóng đen đó vây lấy bạn, cái lạnh của nó thấu tận tâm  can.\n​   Bạn phải chọn một đặc điểm bất kỳ và thực hiện lượt đổ xúc xắc cho đặc điểm đó:\n​4+  Bạn kháng cự được sự tha hóa của bóng đen. Tăng thêm 1 điểm cho một đặc điểm tùy chọn.\n​0-3  Bóng đen hút cạn năng lượng của bạn. Đặc điểm đã chọn bị giảm xuống mức thấp nhất (nhưng không rơi vào biểu tượng đầu lâu). Nếu đặc điểm đó vốn đã ở mức thấp nhất, hãy hạ một đặc điểm khác xuống mức thấp nhất."
  },
  {
    "type": "event",
    "name": "Tường Xoay",
    "subtitle": null,
    "text": "​Bức tường đột ngột xoay chuyển sang một vị trí khác.\n​   Hãy đặt token Công Tắc Tường (Wall Switch) lên một bức tường không có lối thoát hoặc một góc của căn phòng này. Nếu phía bên kia của Công tắc tường chưa có phòng, hãy rút các ô phòng cho đến khi tìm được một phòng phù hợp với tầng này rồi đặt nó vào ngôi nhà. (Nếu không còn phòng nào cho tầng này, hãy bỏ lá bài này). Sau đó, đặt nhà thám hiểm của bạn vào căn phòng mới đó.\n​   Một lần trong lượt của mình, nếu một nhà thám hiểm đang ở một trong hai căn phòng đó, họ có thể thực hiện một lượt đổ xúc xắc Trí tuệ để sử dụng Công Tắc Tường:\n​3+  Nhà thám hiểm tìm thấy công tắc bí mật và đi xuyên qua tường. Hành động này không tính là một bước di chuyển.\n​0-2  Nhà thám hiểm không thể tìm thấy công tắc và không thể đi qua."
  },
  {
    "type": "event",
    "name": "Thối Rữa",
    "subtitle": null,
    "text": "​   Mùi hôi thối trong căn phòng này thật kinh khủng. Nó nồng nặc mùi chết chóc, mùi máu tanh... chẳng khác nào một cái lò mổ.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​5+  Chỉ là những mùi hương gây khó chịu thôi, không có gì hơn. Nhận 1 Tỉnh táo.\n​2-4  Mất 1 Sức mạnh.\n​1  Mất 1 Sức mạnh và 1 Tốc độ.\n​0  Bạn đổ gục xuống vì buồn nôn. Mất đồng thời 1 Sức mạnh, 1 Tốc độ, 1 Trí tuệ và 1 Tỉnh táo."
  },
  {
    "type": "event",
    "name": "Hầm Bí Mật",
    "subtitle": null,
    "text": "​   Một phần tường trượt ra, để lộ một đường hầm ẩm mốc đang chờ đợi phía sau.\n​   Đặt token Hầm Bí Mật (Secret Passage) vào phòng này. Đổ 3 xúc xắc và đặt token Hầm bí mật thứ hai vào:\n​6  Bất kỳ phòng nào đã có trên bàn chơi.\n​4-5  Bất kỳ phòng nào ở tầng trên (Upper floor).\n​2-3  Bất kỳ phòng nào ở tầng trệt (Ground floor).\n​0-1  Bất kỳ phòng nào ở tầng hầm (Basement).\n​   Bạn có thể sử dụng Hầm Bí Mật ngay lập tức, kể cả khi đã hết lượt di chuyển.\n   Di chuyển từ đầu này sang đầu kia của Hầm Bí Mật được tính là 1 bước đi (bản thân đường hầm không được tính là một ô phòng).\n   Ở các lượt sau, bất kỳ ai cũng có thể sử dụng nó, nhưng không được kết thúc lượt khi đang ở trong đường hầm."
  },
  {
    "type": "event",
    "name": "Người Rực Lửa",
    "subtitle": null,
    "text": "​   Một người đàn ông đang bốc cháy chạy băng qua căn phòng. Da thịt của hắn phồng rộp và nứt toác, rơi rụng dần rồi để lộ ra một chiếc đầu lâu rực lửa; nó rơi xuống đất kêu lách cách, nảy lên, lăn đi rồi biến mất.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tinh thần:\n​4+  Bạn cảm thấy hơi nóng gáy một chút, nhưng nhìn chung vẫn ổn. Nhận 1 Tinh thần.\n​2-3  Ra ngoài, mau ra ngoài, bạn phải thoát khỏi đây ngay. Đặt nhân vật của bạn vào Sảnh Chính (Entrance Hall).\n​0-1  Bạn bùng cháy! Chịu 1 xúc xắc sát thương vật lý. Sau đó chịu tiếp 1 xúc xắc sát thương tinh thần trong khi bạn dập lửa."
  },
  {
    "type": "event",
    "name": "Cầu Thang Bí Mật",
    "subtitle": null,
    "text": "​   Một tiếng rít ghê người vang vọng khắp xung quanh. Bạn vừa tìm ra cầu thang bí mật.\n​Hãy đặt một token Cầu Thang Bí Mật (Secret Stairs) vào phòng này và token thứ hai vào  một phòng bất kỳ đã có trên bàn chơi nhưng ở tầng khác.\n​   Việc di chuyển từ đầu này sang đầu kia của Cầu Thang Bí Mật được tính là 1 bước đi (bản thân cầu thang không được tính là một ô phòng).\n​   Bạn có thể bước theo lối cầu thang này ngay lập tức, kể cả khi đã hết lượt di chuyển. Nếu bạn sử dụng nó ngay trong lượt này, hãy rút một lá bài sự kiện tại căn phòng mới mà bạn vừa đến."
  },
  {
    "type": "event",
    "name": "Tiếng Gió Rú",
    "subtitle": null,
    "text": "Cơn gió bắt đầu nổi lên, âm thanh tăng dần từ tiếng rầm rì đến tiếng gào thét xé toạc không gian.\n   ​Mọi nhà thám hiểm đang ở trong Sân Vườn (Gardens), Nghĩa Địa (Graveyard), Mái Hiên (Patio), Toà Tháp (Tower), Ban Công (Balcony), hoặc bất kỳ phòng nào có cửa sổ hướng ra ngoài trời đều phải thực hiện một lượt đổ xúc xắc Sức mạnh:\n​5+  Bạn đứng vững trước cơn cuồng phong.\n​3-4  Gió quật ngã bạn xuống sàn. Chịu 1 xúc xắc sát thương vật lý.\n​1-2  Luồng gió lạnh lẽo thấm sâu vào linh hồn bạn. Chịu 1 xúc xắc sát thương tinh thần.\n​0  Cơn gió quật bạn ngã khuỵu một cách tàn nhẫn. Chịu 1 sát thương vật lý và phải để lại một vật phẩm của bạn (nếu có) tại Sảnh Chính (Entrance Hall).\n​   Mỗi kết quả đổ xúc xắc chỉ ảnh hưởng trực tiếp đến chính nhà thám hiểm thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Tĩnh Lặng",
    "subtitle": null,
    "text": "​   Dưới hầm sâu, mọi thứ đột ngột trở nên im lìm. Ngay cả tiếng hít thở của chính mình, bạn cũng không còn nghe thấy nữa.\n​   Mọi nhà thám hiểm đang ở dưới tầng hầm phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​4+  Bạn bình tĩnh chờ đợi thính giác của mình hồi phục.\n​1-3  Bạn thét lên một tiếng nấc không thành lời. Chịu 1 xúc xắc sát thương tinh thần.\n​0  Bạn hoàn toàn hoảng loạn. Chịu 2 xúc xắc sát thương tinh thần.\n​   Mỗi kết quả đổ xúc xắc chỉ ảnh hưởng trực tiếp đến chính nhà thám hiểm thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Bộ Xương",
    "subtitle": null,
    "text": "​   Hình bóng mẹ và con vẫn đang ôm chặt lấy nhau, dù giờ đây chỉ còn là những mảnh xương tàn.\n​   Hãy đặt token Bộ Xương (Skeletons) vào phòng này. Bạn lập tức chịu 1 xúc xắc sát thương tinh thần.\n​   Một lần trong lượt của mình, một nhà thám hiểm có thể thực hiện một lượt đổ xúc xắc Tỉnh táo để tìm kiếm quanh bộ xương:\n​5+  Bạn tìm thấy một vật dụng còn sót lại. Rút một lá bài Vật phẩm và loại bỏ token Bộ Xương khỏi phòng.\n​0-4  Bạn bới tung mọi thứ nhưng chẳng tìm thấy gì ngoài sự kinh hãi. Chịu thêm 1 xúc xắc sát thương tinh thần.\n​   Mỗi kết quả đổ xúc xắc chỉ ảnh hưởng trực tiếp đến nhà thám hiểm thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Khói",
    "subtitle": null,
    "text": "​   Làn khói dày đặc cuộn trào bủa vây lấy bạn. Bạn không ngừng ho sặc sụa, đưa tay gạt đi những giọt nước mắt đang giàn dụa.\n​   Hãy đặt token Khói (Smoke) vào phòng này. Làn khói sẽ chặn tầm nhìn từ các phòng liền kề. Bất kỳ nhà thám hiểm nào khi ở trong phòng này đều phải đổ ít hơn 2 xúc xắc (tối thiểu vẫn là 1 xúc xắc) cho tất cả các lượt đổ kiểm tra đặc điểm."
  },
  {
    "type": "event",
    "name": "Điều Bí Ẩn",
    "subtitle": null,
    "text": "​   Có điều gì đó rất kỳ lạ về căn phòng này, nhưng là cái gì cơ chứ? Nó cứ ám ảnh không thôi trong tâm trí bạn.\n​   Nếu bạn muốn cố gắng tìm hiểu xem điều kỳ lạ đó là gì, hãy thực hiện một lượt đổ xúc xắc Trí tuệ:\n​4+  Một phần tường trượt ra, để lộ một hốc tường bí mật. Rút một lá bài Vật phẩm.\n​0-3  Bạn không tài nào hiểu nổi điều gì đang diễn ra, và điều đó khiến bạn phát điên một chút. Mất 1 Tỉnh táo."
  },
  {
    "type": "event",
    "name": "Vật Thể Nhầy Nhụa",
    "subtitle": null,
    "text": "​   Cái gì vừa quấn lấy cổ chân bạn thế này? Một con bọ? Một cái xúc tu? Hay là một bàn tay xác chết đang cào cấu?\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tốc độ:\n​4+  Bạn kịp thời thoát khỏi sự kìm kẹp. Nhận 1 Tốc độ.\n​1-3  Mất 1 Sức mạnh.\n​0  Mất 1 Sức mạnh và 1 Tốc độ."
  },
  {
    "type": "event",
    "name": "Con Nhện",
    "subtitle": null,
    "text": "​   Một con nhện to bằng nắm đấm rơi xuống vai bạn... rồi từ từ bò vào trong tóc.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tốc độ để gạt nó ra hoặc một lượt đổ Tỉnh táo để đứng yên:\n​4+  Nó đã biến mất. Nhận thêm 1 điểm vào chính đặc điểm mà bạn vừa dùng để đổ xúc xắc.\n​1-3  Nó cắn bạn. Chịu 1 xúc xắc sát thương vật lý.\n​0  Nó rỉa một miếng thịt trên người bạn. Chịu 2 xúc xắc sát thương vật lý."
  },
  {
    "type": "event",
    "name": "Lời Mời Gọi",
    "subtitle": null,
    "text": "​   Bên ngoài... Ngươi phải thoát ra bên ngoài ngay lập tức. Bay đi tìm tự do nào!\n​   Mọi nhà thám hiểm đang ở trong Sân Vườn (Gardens), Nghĩa Địa (Graveyard), Toà Tháp (Tower), Ban Công (Balcony), hoặc bất kỳ phòng nào có cửa sổ hướng ra ngoài trời đều phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​3+  Bạn kịp bừng tỉnh và lùi lại khỏi rìa ban công/cửa sổ.\n​0-2  Bạn gieo mình xuống Mái Hiên (Patio). (Nếu Mái Hiên chưa có trên bàn chơi, hãy tìm nó trong xấp gạch lát phòng, đặt vào nhà, sau đó xáo lại xấp  bài đó). Hãy  đặt nhân vật của bạn tại đó và chịu 1 xúc xắc  sát thương vật lý.\n​   Mỗi kết quả đổ xúc xắc chỉ ảnh hưởng trực tiếp đến chính nhà thám hiểm thực hiện lượt đổ đó."
  },
  {
    "type": "event",
    "name": "Kẻ Thất Lạc",
    "subtitle": null,
    "text": "​   Một người phụ nữ mặc bộ váy từ thời Nội chiến đang vẫy gọi bạn. Tâm trí bạn dần rơi vào trạng thái mê man.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Trí tuệ. Nếu kết quả từ 5 trở lên, bạn thoát khỏi cơn mê và nhận 1 Trí tuệ. Nếu không, hãy đổ 3 xúc xắc để xem \"Kẻ Thất Lạc\" sẽ dẫn dắt bạn đi đâu:\n​6  Đặt nhân vật của bạn tại Sảnh Chính (Entrance Hall).\n​4-5  Đặt nhân vật của bạn tại Hành Lang Tầng Trên (Upper Landing).\n​2-3  Rút các ô phòng cho đến khi bạn tìm thấy một phòng ở tầng trên.\n​0-1  Rút các ô phòng cho đến khi bạn tìm thấy một phòng ở tầng hầm.\n​   Nếu lá bài này yêu cầu bạn rút ô phòng cho một tầng cụ thể, hãy đặt ô đó vào nhà và đặt nhân vật của bạn vào đó. Nếu đã rút hết xấp bài mà vẫn không tìm được phòng cho tầng bạn đã đổ xúc xắc, hãy đặt nhân vật của bạn tại Sảnh Chính."
  },
  {
    "type": "event",
    "name": "Cánh Cửa Tủ",
    "subtitle": null,
    "text": "​   Cánh cửa tủ đó đang mở... chỉ một khe nhỏ thôi. Chắc chắn phải có thứ gì đó ở bên trong.\n​   Đặt token Tủ Đồ (Closet) vào phòng này.\n   Một lần trong lượt của mình, một nhà thám hiểm có thể đổ 2 xúc xắc để mở Tủ đồ:\n​4+  Rút một thẻ Vật phẩm.\n​2-3  Rút một thẻ Sự kiện.\n​0-1  Rút một thẻ Sự kiện và loại bỏ token Tủ Đồ."
  },
  {
    "type": "event",
    "name": "Tiếng Nói",
    "subtitle": null,
    "text": "​   \"Ta ở dưới sàn nhà... bị chôn vùi ngay dưới chân ngươi đây...\"\nTiếng thì thầm vang lên một lần rồi tan biến vào hư không.\n   ​Bạn phải thực hiện một lượt đổ xúc xắc Trí tuệ:\n​4+  Bạn tìm thấy thứ gì đó ẩn giấu dưới lớp sàn gỗ. Rút một lá bài Vật phẩm.\n​0-3  Bạn điên cuồng đào bới để tìm kiếm chủ nhân của tiếng nói, nhưng mọi nỗ lực đều vô vọng."
  },
  {
    "type": "event",
    "name": "Những Bức Tường",
    "subtitle": null,
    "text": "​   Căn phòng ấm nóng đến kỳ lạ. Những bức tường bọc da thịt phập phồng theo từng nhịp đập đau đớn. Tim bạn bỗng đập theo nhịp điệu của ngôi nhà. Bạn bị hút sâu vào trong lớp tường thịt bầy nhầy... để rồi hiện hình tại một nơi hoàn toàn khác.\n​   Hãy rút một ô phòng mới, đặt vào nhà và đưa nhân vật của bạn đến đó."
  },
  {
    "type": "event",
    "name": "Mạng Nhện",
    "subtitle": null,
    "text": "​Bạn thản nhiên đưa tay gạt mớ mạng nhện... nhưng chúng không rời đi mà bám chặt lấy bạn.    Bạn phải thực hiện một lượt đổ xúc xắc Sức mạnh:\n​4+  Bạn thoát ra. Nhận 1 Sức mạnh và bỏ lá bài này.\n​0-3  Bạn bị kẹt. Giữ lá bài này.\n   Nếu bị kẹt, bạn không thể làm gì cho đến khi được giải thoát. Một lần trong lượt, bất kỳ ai có thể đổ xúc xắc Sức mạnh để giải cứu bạn (bạn cũng có thể tự đổ). Kết quả 4+ thành công, nhưng không nhận 1 Sức mạnh. Bất kỳ ai thất bại sẽ không thể di chuyển trong phần còn lại của lượt đó. Sau 3 lần thất bại, bạn tự động thoát ra ở lượt tiếp theo."
  },
  {
    "type": "event",
    "name": "Cái Quái Gì Thế...?",
    "subtitle": null,
    "text": "​   Khi ngoảnh lại con đường mình vừa đi qua, bạn sững sờ... chẳng còn gì ở đó cả. Nơi căn phòng vừa nãy còn hiện hữu, giờ chỉ là màn sương mù trống rỗng, thăm thẳm.\n​   Hãy nhấc ô phòng bạn đang đứng lên (tạm dời mọi thứ trên đó sang bên). Đặt nó vào một vị trí khác trên cùng tầng sao cho cửa của nó khớp với một lối đi chưa được khám phá (sau đó đặt lại mọi thứ về vị trí cũ).\n​   Nếu tầng này không còn lối đi nào chưa khám phá, hãy di dời cả căn phòng sang một tầng khác."
  },
  {
    "type": "event",
    "name": "Ối!",
    "subtitle": null,
    "text": "​   Bạn rùng mình khi cảm nhận được một cái xác ngay dưới chân mình. Chưa kịp nhảy ra xa, bạn đã bị quật ngã nhào. Một tiếng cười khúc khích lướt qua rồi vụt chạy mất hút vào bóng tối.\n​   Hãy úp tất cả các lá bài Vật phẩm của bạn xuống (không tính các lá Điềm báo) và tráo chúng lên. Người chơi bên phải bạn sẽ chọn ngẫu nhiên một lá để loại bỏ. Sau đó, hãy lật các lá bài Vật phẩm còn lại của bạn lên."
  },
  {
    "type": "event",
    "name": "Lũ Bọ Đáng Sợ",
    "subtitle": null,
    "text": "​   Hàng ngàn con bọ tràn ra trên da thịt, bên dưới lớp quần áo và trên tóc của bạn.\n​   Bạn phải thực hiện một lượt đổ xúc xắc Tỉnh táo:\n​5+  Bạn chớp mắt và chúng biến mất. Nhận 1 Tỉnh táo.\n​1-4  Mất 1 Tỉnh táo.\n​0  Mất 2 Tỉnh táo."
  },
  {
    "type": "event",
    "name": "Con Rối Kỳ Quái",
    "subtitle": null,
    "text": "​   Bạn nhìn thấy một trong những con búp bê khiến bạn nổi da gà. Nó lao về phía bạn với một cây thương nhỏ xíu.\n   Người chơi bên phải bạn sẽ đổ xúc xắc tấn công với Sức mạnh 4 cho Con Rối Kỳ Quái. Bạn phòng thủ trước đòn tấn công này như bình thường bằng cách đổ số xúc xắc bằng với Sức mạnh của mình.\n   Nếu bạn chịu bất kỳ sát thương nào từ đòn tấn công này, nhà thám hiểm đang giữ Cây Thương (Spear) sẽ nhận thêm 2 Sức mạnh (trừ khi bạn chính là người đang giữ Cây Thương)."
  },
  {
    "type": "event",
    "name": "Mảnh Vụn Đổ Nát",
    "subtitle": null,
    "text": "​   Vữa trần rơi xuống từ tường và trần nhà.\n   Bạn phải thực hiện một lượt đổ xúc xắc Tốc độ:\n​3+  Bạn né được đống vữa. Nhận 1 Tốc độ.\n​1-2  Bạn bị chôn vùi trong đống đổ nát. Chịu 1 xúc xắc sát thương vật lý.\n​0  Bạn bị chôn vùi trong đống đổ nát. Chịu 2 xúc xắc sát thương vật lý.\n​   Nếu bị chôn vùi, hãy giữ lá bài này. Bạn không thể làm bất cứ điều gì cho đến khi được giải thoát. Một lần trong lượt của một nhà thám hiểm, người đó có thể thực hiện lượt đổ xúc xắc Sức mạnh để giải cứu bạn (bạn cũng có thể tự thực hiện lượt đổ này). Kết quả 4+ sẽ thành công. Sau 3 lần thử không thành công, bạn sẽ tự động thoát ra vào lượt tiếp theo của mình và thực hiện lượt chơi như bình thường.\n   Bỏ lá bài này khi bạn đã được tự do."
  },
  {
    "type": "event",
    "name": "Âm Thanh Bất An",
    "subtitle": null,
    "text": "​   Tiếng trẻ con khóc, nghe lạc lõng và bị bỏ mặc.\nMột tiếng thét thất thanh.\nTiếng kính vỡ tan tác.\nRồi vạn vật chìm vào tĩnh lặng.\n   Đổ 6 xúc xắc. Nếu kết quả bằng hoặc lớn hơn số thẻ Điềm báo đã lộ diện, bạn nhận thêm 1 Tỉnh táo. Nếu không, chịu 1 xúc xắc sát thương tinh thần."
  },
  {
    "type": "event",
    "name": "Từng Giọt... Từng Giọt...",
    "subtitle": null,
    "text": "​   Một âm thanh đều đặn như những mũi kim đâm vào não bộ của bạn.\n​   Đặt token Giọt Nước (Drip) vào phòng này.\n   Mỗi nhà thám hiểm khi ở trong phòng này phải đổ ít hơn 1 xúc xắc (tối thiểu 1) cho tất cả các lượt đổ kiểm tra chỉ số."
  },
  {
    "type": "item",
    "name": "Tiêm Adrenaline",
    "subtitle": null,
    "text": "Một chiếc ống tiêm chứa thứ chất lỏng huỳnh quang lạ lẫm, phát ra ánh sáng lập lòe ma quái.\n​   Trước khi thực hiện một lượt đổ xúc xắc để kiểm tra đặc điểm, bạn có thể sử dụng vật phẩm này để cộng thêm 4 vào kết quả của lượt đổ đó.\n​   Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Bùa Hộ Mệnh Vĩnh Cửu",
    "subtitle": null,
    "text": "​   Mảnh bạc cổ xưa khảm những viên đá quý rực rỡ, bên trên khắc đầy những lời ban phước từ ngàn xưa. Một quyền năng cổ quái chạy dọc sống lưng khi bạn chạm vào nó.\n​   Nhận ngay 1 Sức mạnh, 1 Tốc độ, 1 Trí tuệ và 1 Tỉnh táo.\n​   Nếu làm mất lá bùa này, bạn sẽ mất 3 Sức mạnh, 3 Tốc độ, 3 Trí tuệ và 3 Tỉnh táo."
  },
  {
    "type": "item",
    "name": "Thuốc Nổ",
    "subtitle": null,
    "text": "​Ngòi nổ vẫn chưa được châm... ít nhất là cho đến lúc này.\n​   Thay vì thực hiện đòn tấn công, bạn có thể ném Thuốc Nổ qua một cánh cửa thông sang căn phòng liền kề. Mỗi nhà thám hiểm và quái vật có các chỉ số Sức mạnh và Tốc độ trong căn phòng đó phải thực hiện một lượt đổ Tốc độ:\n​5+  Không chịu sát thương từ Thuốc Nổ.\n​0-4  Phải chịu 4 điểm sát thương vật lý.\n​   Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Thuốc Trị Liệu",
    "subtitle": null,
    "text": "​   Một loại hỗn hợp sền sệt đựng trong chiếc bát nông.\n​   Bạn có thể thoa Thuốc Trị Liệu lên chính mình hoặc một nhà thám hiểm còn sống khác trong cùng một phòng. Nếu chỉ số Sức mạnh hoặc Tốc độ của người đó đang thấp hơn mức khởi đầu, hãy tăng một hoặc cả hai chỉ số đó về lại mức khởi đầu.\n   ​Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Tượng Thần",
    "subtitle": null,
    "text": "​   Có lẽ nó đã chọn bạn cho một mục đích cao cả nào đó. Chẳng hạn như để hiến tế linh hồn.\n   ​Mỗi lượt một lần, bạn có thể xoa bức Tượng Thần trước khi thực hiện bất kỳ lượt đổ xúc xắc nào (kiểm tra đặc điểm, chiến đấu, hoặc sự kiện) để được cộng thêm 2 xúc xắc vào lượt đổ đó (tối đa là 8 xúc xắc).\n​   Mỗi khi sử dụng quyền năng này, bạn phải chịu mất 1 Tỉnh táo."
  },
  {
    "type": "item",
    "name": "Hòn Đá May Mắn",
    "subtitle": null,
    "text": "​   Một hòn đá nhẵn nhụi, trông có vẻ tầm thường. Nhưng bạn có cảm giác rằng nó sẽ mang lại vận may cho mình.\n​   Sau khi bạn thực hiện bất kỳ lượt đổ xúc xắc nào, bạn có thể xoa hòn đá một lần để đổ lại bất kỳ số lượng xúc xắc nào trong số đó.\n​   Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Túi Cứu Thương",
    "subtitle": null,
    "text": "​   Một chiếc túi của bác sĩ, đã vơi đi một vài vật dụng quan trọng.\n   ​Mỗi lượt một lần, bạn có thể thực hiện một lượt đổ Trí tuệ để chữa trị cho chính mình hoặc một nhà thám hiểm khác trong cùng một phòng:\n​8+: Nhận thêm tối đa 3 điểm chỉ số thể chất.\n​6-7: Nhận thêm tối đa 2 điểm chỉ số thể chất.\n​4-5: Nhận thêm 1 điểm vào một chỉ số thể chất.\n​0-3: Không có chuyện gì xảy ra.\n​   Bạn không thể dùng Túi Cứu Thương để tăng một chỉ số vượt quá mức khởi đầu của nó."
  },
  {
    "type": "item",
    "name": "Hộp Nhạc",
    "subtitle": null,
    "text": "​   Một món đồ cổ được chế tác thủ công. Nó phát ra một giai điệu ám ảnh cứ lẩn quẩn mãi trong đầu bạn.\n​   Mỗi lượt một lần, bạn có thể mở hoặc đóng chiếc Hộp Nhạc này.\n   ​Khi Hộp Nhạc đang mở, bất kỳ nhà thám hiểm hoặc quái vật nào có chỉ số Tỉnh táo khi đi vào hoặc bắt đầu lượt chơi trong cùng một phòng đều phải thực hiện một lượt đổ Tỉnh táo với kết quả 4+.\n​   Nếu thất bại, nhà thám hiểm hoặc quái vật đó phải kết thúc lượt đi ngay lập tức vì bị mê hoặc bởi tiếng nhạc.\n​   Nếu bất kỳ nhà thám hiểm hoặc quái vật nào đang cầm Hộp Nhạc mà bị mê hoặc, kẻ đó sẽ làm rơi Hộp Nhạc xuống đất. Nếu lúc bị rơi Hộp Nhạc đang mở, nó vẫn sẽ tiếp tục mở."
  },
  {
    "type": "item",
    "name": "Găng Tay Móc Túi",
    "subtitle": null,
    "text": "​   Tự giúp chính mình chưa bao giờ lại dễ dàng đến thế.\n   ​Khi bạn đang ở cùng phòng với một nhà thám hiểm khác, bạn có thể loại bỏ vật phẩm này để lấy bất kỳ vật phẩm nào mà nhà thám hiểm đó đang mang theo."
  },
  {
    "type": "item",
    "name": "Hộp Câu Đố",
    "subtitle": null,
    "text": "​Chắc chắn phải có cách nào đó để mở nó ra.\n​   Mỗi lượt một lần, bạn có thể thực hiện một lượt đổ xúc xắc Trí tuệ để cố gắng mở chiếc hộp này:\n​6+  Bạn mở được hộp. Hãy rút 2 lá bài Vật phẩm, sau đó loại bỏ Hộp Câu Đố.\n​0-5  Bạn vẫn chưa thể mở được nó."
  },
  {
    "type": "item",
    "name": "Chân Thỏ",
    "subtitle": null,
    "text": "​Chẳng may mắn lắm cho con thỏ nhỉ.\n   ​Mỗi lượt một lần, bạn có thể đổ lại 1 xúc xắc. Bạn bắt buộc phải giữ kết quả của lần đổ thứ hai này."
  },
  {
    "type": "item",
    "name": "Súng Lục",
    "subtitle": null,
    "text": "​VŨ KHÍ\n​   Một món vũ khí cũ kỹ nhưng trông đầy uy lực.\n​   Bạn có thể dùng Súng Lục để tấn công bằng chỉ số Tốc độ thay vì Sức mạnh. (Đối thủ của bạn sau đó cũng sẽ dùng Tốc độ để phòng thủ và phải chịu sát thương vật lý nếu thua).\n​   Bạn được đổ thêm 1 xúc xắc cho lượt đổ tấn công bằng Tốc độ (tối đa là 8 xúc xắc).\n​   Với khẩu Súng Lục, bạn có thể tấn công bất kỳ ai trong cùng một phòng hoặc trong tầm mắt (xác định bằng một đường thẳng xuyên qua các cánh cửa).\n​   Nếu bạn tấn công một mục tiêu ở phòng khác và bị thua lượt đổ đó, bạn không phải chịu sát thương phản lại.\n​   Bạn không thể sử dụng vũ khí khác khi đang sử dụng món này."
  },
  {
    "type": "item",
    "name": "Lông Vũ Thiên Thần",
    "subtitle": null,
    "text": "​Một chiếc lông vũ hoàn mỹ nhẹ nhàng rung động trên tay bạn.\n​   Khi bạn thực hiện bất kỳ lượt đổ xúc xắc nào, bạn có thể chọn một con số từ 0 đến 8 để sử dụng thay vì tung xúc xắc.\n   ​Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Dao Găm Hiến Tế",
    "subtitle": null,
    "text": "​VŨ KHÍ\n​   Một mảnh sắt xoắn lại, phủ đầy những ký tự huyền bí và hoen ố bởi những vết máu.\n   ​Khi thực hiện một đòn tấn công bằng Sức mạnh với vũ khí này, bạn được đổ thêm 3 xúc xắc (tối đa là 8 xúc xắc), nhưng trước đó bạn phải thực hiện một lượt đổ xúc xắc Trí tuệ:\n​6+  Không có chuyện gì xảy ra (Bạn tấn công bình thường).\n​3-5  Bạn bị mất 1 điểm ở một chỉ số tinh thần.\n​0-2  Con dao tự xoắn lại trên tay bạn! Bạn phải chịu 2 xúc xắc sát thương vật lý và không thể tấn công trong lượt này."
  },
  {
    "type": "item",
    "name": "​                    Muối Ngửi",
    "subtitle": null,
    "text": "​   Phù, thật là nồng nặc.\n​   Nếu chỉ số Trí tuệ của bạn hoặc của một nhà thám hiểm còn sống khác đang ở mức thấp hơn mức khởi đầu, và hai người đang ở trong cùng một phòng, bạn có thể sử dụng Muối Ngửi để đưa chỉ số đó trở lại mức khởi đầu.\n​   Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Bộ Giáp",
    "subtitle": null,
    "text": "​   Chỉ là món đồ hóa trang từ một hội chợ Phục Hưng, nhưng dù sao thì nó vẫn làm bằng kim loại thật.\n​   Bất cứ khi nào bạn phải chịu sát thương vật lý (không giới hạn một lần mỗi lượt), hãy giảm 1 điểm sát thương đó.\n   ​Vật phẩm này không thể bị đánh cắp."
  },
  {
    "type": "item",
    "name": "Rìu",
    "subtitle": null,
    "text": "​VŨ KHÍ\n   Lưỡi rìu cực kỳ sắc bén.\n   ​Bạn được đổ thêm 1 xúc xắc (tối đa là 8 xúc xắc) khi thực hiện một đòn tấn công bằng Sức mạnh với vũ khí này.\n   ​Bạn không thể sử dụng vũ khí nào khác khi đang dùng chiếc rìu này."
  },
  {
    "type": "item",
    "name": "Chuông",
    "subtitle": null,
    "text": "​Một chiếc chuông đồng phát ra những tiếng kêu vang vọng, ngân dài.\n​   Nhận ngay 1 Tỉnh táo.\n   ​Nếu làm mất chiếc Chuông, bạn sẽ bị trừ 1 Tỉnh táo.\n​   Sau khi Câu Chuyện Ma (Haunt) đã bắt đầu, mỗi lượt một lần, bạn có thể thực hiện một lượt đổ Tỉnh táo để sử dụng Chuông:\n​5+  Di chuyển bất kỳ số lượng anh hùng nào (những người không bị cản trở) lại gần bạn thêm 1 ô.\n​0-4  Kẻ phản bội có thể di chuyển bất kỳ số lượng quái vật nào lại gần bạn thêm 1 ô. (Nếu bạn chính là kẻ phản bội, kết quả này không có tác dụng).\n​   Nếu trò chơi không có kẻ phản bội, tất cả quái vật sẽ tự động tiến lại gần bạn thêm 1 ô."
  },
  {
    "type": "item",
    "name": "Dao Găm Máu",
    "subtitle": null,
    "text": "​                         VŨ KHÍ\n   Một món vũ khí kinh tởm. Những mũi kim và ống dẫn nhô ra từ cán dao... rồi đâm phập thẳng vào tĩnh mạch của bạn.\n​   Bạn được đổ thêm 3 xúc xắc (tối đa là 8 xúc xắc) khi thực hiện một đòn tấn công bằng Sức mạnh với vũ khí này. Nếu chọn dùng nó, bạn phải chịu mất 1 Tốc độ.\n​   Bạn không thể sử dụng vũ khí nào khác khi đang dùng con dao này.\n​   Vật phẩm này không thể trao đổi hay vứt bỏ.     Nếu nó bị đánh cắp, bạn phải chịu 2 xúc xắc sát thương vật lý."
  },
  {
    "type": "item",
    "name": "Bình Thuốc",
    "subtitle": null,
    "text": "​   Một lọ thuốc đục ngầu chứa thứ chất lỏng đen kịt bên trong.\n​   Sau khi Câu Chuyện Ma (Haunt) đã bắt đầu, mỗi lượt một lần, bạn có thể đổ 3 xúc xắc và uống thử thứ nước này:\n​6  Chọn một phòng bất kỳ và đưa nhà thám hiểm của bạn đến đó.\n​5  Nhận thêm 2 Sức mạnh và 2 Tốc độ.\n​4  Nhận thêm 2 Trí tuệ và 2 Tỉnh táo.\n​3  Nhận thêm 1 Trí tuệ nhưng bị trừ 1 Sức mạnh.\n​2  Bị trừ 2 Trí tuệ và 2 Tỉnh táo.\n​1  Bị trừ 2 Sức mạnh và 2 Tốc độ.\n​0  Bị trừ 2 điểm ở mỗi chỉ số.\n​   Hãy loại bỏ vật phẩm này sau khi sử dụng."
  },
  {
    "type": "item",
    "name": "Cây Nến",
    "subtitle": null,
    "text": "​Nó khiến những cái bóng lay động — ít nhất thì, bạn hy vọng là do nó làm vậy.\n​   Nếu bạn rút phải một lá bài Sự kiện, bạn được đổ thêm 1 xúc xắc (tối đa là 8 xúc xắc) cho các lượt đổ kiểm tra đặc điểm của sự kiện đó.\n​   Nếu bạn sở hữu đủ bộ ba vật phẩm Chuông, Cuốn Sách và Cây Nến, bạn được cộng thêm 2 điểm vào mỗi chỉ số đặc điểm. Lần đầu tiên bạn bị mất một trong ba vật phẩm này về sau, bạn sẽ bị trừ lại 2 điểm ở mỗi chỉ số đó."
  },
  {
    "type": "item",
    "name": "Xúc Xắc Hắc Ám",
    "subtitle": null,
    "text": "​   Bạn có cảm thấy mình may mắn không?\n​   Mỗi lượt một lần, bạn có thể đổ 3 xúc xắc:\n​6  Di chuyển đến vị trí của bất kỳ nhà thám hiểm nào chưa bị lộ diện là kẻ phản bội.\n​5  Di chuyển một nhà thám hiểm khác đang ở cùng phòng sang một căn phòng liền kề.\n​4  Nhận thêm 1 điểm vào một chỉ số thể chất.\n3  Ngay lập tức di chuyển sang một phòng liền kề (không tốn bước di chuyển).\n5  Nhận thêm 1 điểm vào một chỉ số tinh thần.\n​1  Rút một lá bài Sự kiện.\n​0  Giảm tất cả các chỉ số xuống mức cận tử. Sau đó, hãy loại bỏ Xúc Xắc Hắc Ám."
  },
  {
    "type": "omen",
    "name": "Vết Cắn",
    "subtitle": null,
    "text": "​   Một tiếng gầm gừ, mùi của cái chết thoang thoảng. Cơn đau ập đến. Bóng tối bao trùm. Rồi biến mất.\n​   Khi bạn rút lá bài này, một thứ gì đó đã cắn bạn. Người chơi bên phải bạn sẽ đổ xúc xắc tấn công Sức mạnh 4 thay cho sinh vật bí ẩn đó (trước khi nó lặn mất vào bóng tối). Bạn thực hiện phòng thủ chống lại đòn tấn công này như bình thường bằng cách đổ số xúc xắc bằng với chỉ số Sức mạnh của mình.\n​   Lá bài Điềm báo này không thể bị vứt bỏ, giao dịch hay bị đánh cắp."
  },
  {
    "type": "omen",
    "name": "Cuốn Sách",
    "subtitle": null,
    "text": "​Một cuốn nhật ký hay ghi chép trong phòng thí nghiệm? Những dòng chữ cổ xưa hay lời mê sảng thời hiện đại?\n​   Nhận thêm 2 Trí tuệ ngay lập tức.\n​   Mất 2 Trí tuệ nếu bạn làm mất Cuốn Sách."
  },
  {
    "type": "omen",
    "name": "Đầu Lâu",
    "subtitle": null,
    "text": "​   Một cái đầu lâu, nứt vỡ và thiếu vài chiếc răng.\n   ​Nếu bạn phải chịu sát thương tinh thần, bạn có thể chọn chịu toàn bộ lượng sát thương đó thành sát thương vật lý."
  },
  {
    "type": "omen",
    "name": "Cây Thương",
    "subtitle": null,
    "text": "​                        VŨ KHÍ\n​   Một món vũ khí đang rung lên đầy quyền năng.\n   ​Bạn được đổ thêm 2 xúc xắc bổ sung (tối đa là 8 xúc xắc) khi thực hiện một đòn tấn công Sức mạnh bằng món vũ khí này.\n​   Bạn không thể sử dụng một món vũ khí nào khác trong khi đang sử dụng vũ khí này."
  },
  {
    "type": "omen",
    "name": "Bàn Cầu Cơ",
    "subtitle": null,
    "text": "​Một chiếc bảng với các chữ cái và con số dùng để gọi hồn người chết.\n​   Trước khi di chuyển trong lượt của mình, bạn có thể xem ô phòng trên cùng  của chồng bài phòng.\n​   Nếu bạn sử dụng Bàn Cầu Cơ sau khi Câu Chuyện Ma (Haunt) đã bắt đầu, kẻ phản bội có thể di chuyển bất kỳ số lượng quái vật nào tiến lại gần bạn thêm 1 ô. (Nếu bạn chính là kẻ phản bội, bạn không cần phải di chuyển chúng).\n​Nếu không có kẻ phản bội, tất cả quái vật sẽ tự động di chuyển tiến lại gần bạn thêm 1 ô."
  },
  {
    "type": "omen",
    "name": "Quả Cầu Pha Lê",
    "subtitle": null,
    "text": "​   Những hình ảnh mờ ảo xuất hiện bên trong lớp thủy tinh.\n​   Mỗi lượt một lần, sau khi Câu Chuyện Ma (Haunt) đã bắt đầu, bạn có thể thực hiện một lượt đổ xúc xắc Trí tuệ để nhìn sâu vào Quả Cầu Pha Lê:\n​4+  Bạn nhìn thấy sự thật. Hãy tìm trong chồng bài Vật phẩm hoặc Sự kiện một lá bài tùy chọn. Tráo lại chồng bài đó, sau đó đặt lá bài đã chọn lên trên cùng.\n​1-3  Bạn phải ngoảnh mặt đi chỗ khác. Mất 1 Tỉnh táo.\n​0  Bạn đang nhìn thẳng vào Địa ngục. Mất 2 Tỉnh táo."
  },
  {
    "type": "omen",
    "name": "Chú Chó",
    "subtitle": "BẠN ĐỒNG HÀNH",
    "text": "​BẠN ĐỒNG HÀNH\n​   Chú chó ghẻ này có vẻ thân thiện. Ít nhất thì bạn hy vọng là thế.\n​   Nhận thêm 1 Sức mạnh và 1 Tỉnh táo ngay lập tức.\n​   Mất 1 Sức mạnh và 1 Tỉnh táo nếu bạn không còn giữ Chú Chó này nữa.\n​   Lấy một quân cờ quái vật nhỏ để đại diện cho Chú Chó và đặt nó vào phòng của bạn. (Sử dụng quân cờ khác màu với các quái vật khác nếu có).\n​   Mỗi lượt một lần, Chú Chó có thể di chuyển đến bất kỳ phòng đã khám phá nào trong phạm vi 6 ô, thông qua các cửa và cầu thang, sau đó quay trở về. Nó có thể nhặt, mang theo, và/hoặc thả rơi 1 vật phẩm trước khi quay về.\n​   Chú Chó không bị làm chậm bởi đối thủ. Nó không thể sử dụng các lối đi một chiều hoặc các phòng yêu cầu phải đổ xúc xắc. Nó không thể mang các vật phẩm làm chậm tốc độ di chuyển.\n​   Lá bài Điềm báo này không thể bị vứt bỏ, trao đổi hay bị đánh cắp."
  },
  {
    "type": "omen",
    "name": "​Cô Bé",
    "subtitle": "BẠN ĐỒNG HÀNH",
    "text": "​BẠN ĐỒNG HÀNH\n​   Một cô bé. Bị mắc kẹt. Cô đơn. Bạn giải thoát cho cô bé!\n   ​Nhận thêm 1 Tỉnh táo và 1 Trí tuệ ngay lập tức.\n​   Mất 1 Tỉnh táo và 1 Trí tuệ nếu bạn không còn quyền bảo hộ cho Cô Bé nữa.\n   ​Lá bài Điềm báo này không thể bị vứt bỏ, trao đổi hay bị đánh cắp."
  },
  {
    "type": "omen",
    "name": "Biểu Tượng Thánh",
    "subtitle": null,
    "text": "​Một biểu tượng của sự bình yên trong một thế giới đầy bất ổn.\n   ​Nhận ngay 2 điểm Tỉnh táo.\n​   Mất 2 điểm Tỉnh táo nếu bạn làm mất Biểu Tượng Thánh này."
  },
  {
    "type": "omen",
    "name": "Gã Điên",
    "subtitle": "BẠN ĐỒNG HÀNH",
    "text": "​           BẠN ĐỒNG HÀNH\n   ​Một gã điên cuồng, mồm mép sùi cả bọt.\n   ​Nhận ngay 2 điểm Sức mạnh và mất 1 điểm Tỉnh táo.\n   ​Mất 2 điểm Sức mạnh và nhận lại 1 điểm Tỉnh táo nếu bạn không còn quyền bảo hộ cho Gã Điên này nữa.\n​   Lá bài Điềm báo này không thể bị vứt bỏ, trao đổi hay bị đánh cắp."
  },
  {
    "type": "omen",
    "name": "Mặt Nạ",
    "subtitle": null,
    "text": "​   Một chiếc mặt nạ u sầu để che giấu ý định của bạn.\n​   Mỗi lượt một lần, bạn có thể thực hiện một lượt đổ xúc xắc Tỉnh táo để sử dụng Mặt Nạ:\n​4+  Bạn có thể đeo vào hoặc tháo Mặt Nạ ra:\n​Nếu bạn đeo Mặt Nạ: Nhận thêm 2 Trí tuệ và mất 2 Tỉnh táo.\n​Nếu bạn tháo Mặt Nạ: Nhận thêm 2 Tỉnh táo và mất 2 Trí tuệ.\n​0-3  Bạn không thể sử dụng Mặt Nạ trong lượt này."
  },
  {
    "type": "omen",
    "name": "Mặt Dây Chuyền",
    "subtitle": null,
    "text": "​   Một mặt dây chuyền có khắc hình ngôi sao năm cánh.\n​   Bạn được miễn nhiễm với các hiệu ứng của Căn Buồng Hình Sao (Pentagram Chamber), Nhà Mồ (Crypt), Nghĩa Địa (Graveyard)."
  },
  {
    "type": "omen",
    "name": "Chiếc Nhẫn",
    "subtitle": null,
    "text": "​   Một chiếc nhẫn cũ kỹ với những dòng chữ không thể hiểu nổi.\n​   Nếu bạn tấn công một đối thủ có chỉ số Tỉnh táo, bạn có thể tấn công bằng Tỉnh táo thay vì Sức mạnh.\n​   Đối thủ của bạn sau đó cũng sẽ dùng Tỉnh táo để phòng thủ, và sát thương gây ra là sát thương tinh thần thay vì sát thương vật lý."
  }
];
