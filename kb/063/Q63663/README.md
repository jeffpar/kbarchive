---
layout: page
title: "Q63663: Macro Recorder Does Not Record Keystrokes in MS-DOS Apps"
permalink: kb/063/Q63663/
---

## Q63663: Macro Recorder Does Not Record Keystrokes in MS-DOS Apps

	Article: Q63663
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The macro Recorder supplied with Microsoft Windows does not record keystrokes
	typed in MS-DOS-based applications running under Windows, even if those
	applications are run in a window within Windows 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	The macro Recorder records Windows "messages," which are the packets of
	information Windows sends to applications while they run. However, keystrokes
	sent to an MS-DOS-based application are not sent to the application as messages;
	MS-DOS programs expect keystrokes to be placed in a buffer in memory. Thus, when
	the Recorder is set to record the actions of an MS-DOS-based application, no
	messages are generated and nothing is recorded. The Recorder should return the
	message "No events recorded."
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
