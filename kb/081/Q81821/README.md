---
layout: page
title: "Q81821: Program Manager Does Not Maximize"
permalink: /kb/081/Q81821/
---

## Q81821: Program Manager Does Not Maximize

{% raw %}

	Article: Q81821
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program is started using the run= line in the WIN.INI file, or by placing
	its name on the command line that starts Windows, Program Manager starts
	minimized. When Program Manager is restored, Program Manager does not come up
	maximized, even if it was maximized when you last exited Windows and saved
	changes.
	
	WORKAROUND
	==========
	
	The only workaround at this time is to save the changes with Program Manager in
	a non-maximized state, but with the borders pulled out as far as possible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem was corrected and does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	The WIN.INI file has a run= line, on which program executable filenames can be
	placed. For example:
	
	       run=c:\winword\winword.exe c:\windows\calendar.exe
	
	The programs listed on this line are then started automatically as if they had
	been started by double-clicking their icons or starting them by choosing Run
	from the File menu. The same thing occurs if the program is started by including
	its name on the command line that starts Windows. For example:
	
	  win winword
	
	This is as opposed to using the load= line in the WIN.INI file where the programs
	start minimized as icons on the desktop. One consequence of starting programs on
	the run= line or the command line is that Program Manager is minimized
	regardless of whether or not Minimize On Use is selected in the Options menu of
	Program Manager.
	
	If the Program Manager is then restored by double-clicking its icon, it returns
	in a non-maximized state. This occurs even if, when the you last exited Windows,
	Program Manager was maximized and the changes were saved.
	
	The state of Program Manager, minimized, maximized, or restored (open as a Window
	but not maximized) is recorded in the PROGMAN.INI file in the [Settings]
	section. The line appears as follows
	
	       Window=vv ww xxx yyy z
	
	where z can be either 1, 2, or 3. This number determines the state Program
	Manager is in when Windows starts. Restored is represented by 1, minimized by 2,
	and maximized by 3. If the number is 3, Program Manager starts maximized unless
	a program is started on the run= line in the WIN.INI file or by putting its
	executable filename on the command line that starts Windows.
	
	When the program starts, Program Manager is minimized. When you double- click on
	its icon, Program Manager displays in a window but is not maximized. The value
	in the PROGMAN.INI file, however, is not changed. It is still 3.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
