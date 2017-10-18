---
layout: page
title: "Q107867: PRB: CodeView Cannot Use &quot;8514-Like&quot; Display with /8"
permalink: kb/107/Q107867/
---

## Q107867: PRB: CodeView Cannot Use &quot;8514-Like&quot; Display with /8

	Article: Q107867
	Product(s): Microsoft Programming Utilities
	Version(s): 4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CodeView for Windows starts, if the command line specifies the /8 option
	and no 8514/A adapter is installed, CodeView displays the following message:
	
	  /8 specified with no 8514/A display adapter.
	
	The customer may report that this option worked before upgrading to CodeView 4.1
	for Windows.
	
	CAUSE
	=====
	
	In CodeView versions 4.0x for Windows, the /8 option switch worked with some
	"8514-like" displays and caused a general protection (GP) fault with other
	displays without any warning message. Code was added to CodeView version 4.1 to
	verify that an 8514 display is available when the /8 option switch is specified.
	
	RESOLUTION
	==========
	
	Due to the number of "8514-like" display adapters on the market, CodeView
	provides an undocumented /8+ option switch that disables the display adapter
	validation code. To use this option, from the Windows Program Manager select the
	File menu and choose run. Enter the following command (you may need to specify a
	path):
	
	  " CVW /8+ appname.exe " (without the quotation marks)
	
	Please note that on non-8514/A adapters, even adapters that are 8514-like, this
	switch is not guaranteed to work, and can cause corrupted screens because of the
	assumption that the card is a genuine 8514/A adapter.
	
	MORE INFORMATION
	================
	
	To use the 8514/VGA configuration, specify the /8 (or /8+) option switch when
	starting CVW. In addition, specify the /B (black and white) option if you use a
	monochrome VGA adapter with CodeView.
	
	In other words, when using a color VGA adapter, start CodeView with the following
	command line:
	
	  CVW /8 appname.exe
	
	When using a monochrome VGA adapter, start CodeView with the following command
	line:
	
	  CVW /8 /b appname.exe
	
	In either of these configurations, CodeView uses the 8514/a monitor for the
	Windows display and the VGA monitor for the debugging display.
	
	Optionally, you can specify the /25, /43, or /50 option to specify 25, 43, or
	50-line mode, respectively, on the VGA debugging screen. The 50-line mode is the
	default.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q66952 Using CVW on an IBM PS/2 or Other 8514/a System
	
	Additional query words: 4.10 gpf gp-fault
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView410
	Version           : :4.1
	
	=============================================================================
	
