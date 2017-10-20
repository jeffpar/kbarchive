---
layout: page
title: "Q116462: BUG: Screen Corruption Can Occur with _setvideomode()"
permalink: /kb/116/Q116462/
---

## Q116462: BUG: Screen Corruption Can Occur with _setvideomode()

{% raw %}

	Article: Q116462
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the CodeView video mode is set to be the same as the current MS-DOS video
	mode, calls to _setvideomode(_DEFAULTMODE) can cause screen corruption.
	
	RESOLUTION
	==========
	
	To work around the problem, start CodeView in a different mode than the one
	MS-DOS is using.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with CodeView for MS-DOS. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates the problem. Build a debug version and follow
	these steps:
	
	1. Install the ANSI.SYS driver. If ANSI.SYS is not already installed, you have
	  to reboot your computer to install it. To install ANSI.SYS, add the following
	  line to your CONFIG.SYS file:
	
	  " DEVICE=C:\DOS\ANSI.SYS " (without the quotation marks)
	
	2. Enter "mode co80, 50" (without the quotation marks) at the MS-DOS prompt.
	
	3. Enter "CV /50 VIDEO" (without the quotation marks) to debug the VIDEO.EXE
	  file in CodeView.
	
	4. Type "t3" (without the quotation marks) in the CodeView command window.
	
	There should now be a green border around the whole screen that does not go away
	when you exit CodeView. You may also experience a certain amount of text loss in
	the CodeView windows.
	
	NOTE: Reissuing the mode command with different mode values at the MS-DOS prompt
	restores the screen.
	
	In step 2 above, using "CV /43 video" (without the quotation marks) or "CV /25
	video" (without the quotation marks) prevents this problem from occurring.
	
	Sample Code
	-----------
	
	  /* Compile options needed: Zi /Od
	  */ 
	
	  /* VIDEO.C */ 
	
	     #include <graph.h>
	
	     void main(void)
	     {
	      _setvideomode(_DEFAULTMODE);
	     }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
