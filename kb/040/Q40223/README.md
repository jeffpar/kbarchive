---
layout: page
title: "Q40223: Logitech Mouse  Driver May Fail in 43/50...Line Mode"
permalink: /kb/040/Q40223/
---

## Q40223: Logitech Mouse  Driver May Fail in 43/50...Line Mode

{% raw %}

	Article: Q40223
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 26-JUN-1989
	
	There is a problem with the Logitec mouse driver (Version 3.42), which
	makes it incapable of dealing with screens that are 50 lines high.
	Version 3.42 of the driver correctly deals with 43-line screens;
	however, earlier versions of the Logitec driver do not work properly.
	
	If you invoke QuickC with the "/h" option, it will come up in the
	highest possible number of lines that your video card can support.
	Most VGA cards support a 50-line mode.
	
	If you are having problems with mouse support for high-resolution
	screens, and you have a Logitech mouse driver, please contact Logitec
	for an update to the driver software.

{% endraw %}
