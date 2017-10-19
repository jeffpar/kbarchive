---
layout: page
title: "Q281281: PRB: FLUSH Command Slower on Windows 95 or Windows 98 Computers"
permalink: /kb/281/Q281281/
---

## Q281281: PRB: FLUSH Command Slower on Windows 95 or Windows 98 Computers

	Article: Q281281
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOSWin2000 kbvfp300b kbvfp500a kbvfp600 kbOSWin kbOSWin95 kbOSWin98 KbDBFDB
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the FLUSH command to flush the buffers and save data that is
	located on another computer, it appears to run slowly when the user's computer
	has Microsoft Windows 95 or Microsoft Windows 98 as its operating system and the
	computer that the data is located on has Microsoft Windows NT 4.0 or Microsoft
	Windows 2000 Server as its operating system. When both computers use the Windows
	NT 4.0 or Windows 2000 operating systems, the FLUSH command appears to run much
	faster.
	
	RESOLUTION
	==========
	
	To resolve this problem, issue the FLUSH command fewer times in the loop.
	
	MORE INFORMATION
	================
	
	Both sets of operating systems perform the FLUSH commands in about the same
	amount of time. Windows NT 4.0 and Windows 2000 operating systems seem to
	perform the FLUSH commands faster because they cache the FLUSH commands and then
	return operation to the application. (The operating system continues to issue
	FLUSH commands in the background.) Windows 95 and Windows 98 return control to
	the application only after all FLUSH commands are complete.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Copy and run the following code in a program (.prg) file:
	
	  * Use a Windows 95 or Windows 98 computer and open a table on a Windows 
	  *    NT 4.0 or Windows 2000 computer.
	  USE \\<servername>\<tablename>
	  x=SECONDS()
	  ? "Started flushing..."
	  FOR i = 1 TO 50000
	  	FLUSH
	  NEXT i
	  y = SECONDS()
	  ? "Flushed in" + STR(y - x, 7, 3) + "  seconds."
	
	Additional query words: slow performance delay hang
	
	======================================================================
	Keywords          : kbDatabase kbOSWin2000 kbvfp300b kbvfp500a kbvfp600 kbOSWin kbOSWin95 kbOSWin98 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
