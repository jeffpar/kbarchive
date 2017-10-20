---
layout: page
title: "Q134240: Running the MS-DOS-Based Portion of a Windows-Based Program"
permalink: /kb/134/Q134240/
---

## Q134240: Running the MS-DOS-Based Portion of a Windows-Based Program

{% raw %}

	Article: Q134240
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run the MS-DOS-based portion of a program that can be run in both Windows and
	MS-DOS within Windows, you must create a separate icon.
	
	MORE INFORMATION
	================
	
	Winver.exe is an example of a program that can be run in Windows and MS-DOS. If
	you type "winver" in an MS-DOS window in Windows 95, the Windows-based portion
	of Winver runs.
	
	To run the MS-DOS-based portion of an application within Windows 95, follow these
	steps:
	
	NOTE: This example uses Winver.exe.
	
	1. Use the right mouse button to click the desktop, point to New on the menu
	  that appears, and then click Shortcut.
	
	2. In the Command Line box, type the following line:
	
	  " c:\command.com /k c:\windows\winver.exe " (without the quotation marks)
	
	  Note that the /k switch leaves Command.com running after the specified program
	  is finished.
	
	3. Click Next.
	
	4. In the "Select a name for the shortcut" box, type a name, and then click
	  Finish.
	
	5. Use the right mouse button to click the new icon, and then click Properties
	  on the menu that appears.
	
	6. On the Program tab, click the Advanced button.
	
	7. Click the "Prevent MS-DOS-based programs from detecting Windows" check box to
	  select it, and then click OK. Click OK again.
	
	When you double-click the new icon, the MS-DOS-based portion of the program runs.
	Note that configuring the command prompt in this manner prevents any
	Windows-based program from starting from the command prompt.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
