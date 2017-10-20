---
layout: page
title: "Q116489: BUG: Printing to stdout with CV /2 Can Cause Screen Corruption"
permalink: /kb/116/Q116489/
---

## Q116489: BUG: Printing to stdout with CV /2 Can Cause Screen Corruption

{% raw %}

	Article: Q116489
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
	
	Screen corruption occurs when printing to stdout from a DOS application, while
	using CV /2 to start CodeView in a DOS session under Windows. Portions of the
	screen may get blanked out and restored from old buffered screens, the mouse
	position may move to the middle of the screen, or existing text may get
	overwritten. Note that these problems do not occur when running outside of
	Windows under native DOS.
	
	RESOLUTION
	==========
	
	To work around the problem, you can debug under native DOS or switch to single
	monitor mode.
	
	Depending on your application, the following may also work while debugging under
	Windows:
	
	- Clear the screen before starting CV at the DOS session prompt.
	
	- If you have Visual C++, start CodeView for DOS from the Workbench Tools menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the interaction between
	Windows and CodeView for DOS while running in a Windows DOS session. We will
	post more information here in the Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The example program below demonstrates the problem. Once you have built the
	program, run CodeView in dual monitor mode and step through the code in the
	debugger, observing the changes to the VGA screen. It is best to begin with a
	full screen of text before starting CodeView.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od */ 
	  #include <stdio.h>
	
	  void main( void )
	  {
	      int i;
	
	      for( i = 0; i < 50; i++ )
	      {
	          fprintf( stdout,"Hello World\n" );
	      }
	  }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
