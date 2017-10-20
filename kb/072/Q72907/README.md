---
layout: page
title: "Q72907: Manipulating Program Manager Groups Using DDE Interface"
permalink: /kb/072/Q72907/
---

## Q72907: Manipulating Program Manager Groups Using DDE Interface

{% raw %}

	Article: Q72907
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows 3.0 Program Manager features a dynamic data exchange (DDE)
	interface that allows other applications that support DDE (for example,
	Microsoft Excel or Microsoft Word for Windows) to control certain aspects of
	Program Manager.
	
	This can be done using any of the following commands:
	
	CreateGroup()   Instructs the Program Manager to create a
	               new group or activate the window of an
	               existing group.
	
	ShowGroup()     Instructs the Program Manager to maximize,
	               minimize, or restore a group window.
	
	AddItem()       Instructs the Program Manager to create a
	               new program item (icon) in the currently
	               active group window.
	
	DeleteGroup()   Instructs the Program Manager to delete
	               a group.
	
	ExitProgman()   Instructs the Program Manager to close.
	               This command is only available when Program
	               Manager is NOT the current Windows shell.
	
	MORE INFORMATION
	================
	
	The section below describes each command in detail.
	
	CreateGroup()
	-------------
	
	The following is the syntax for the CreateGroup() command:
	
	  CreateGroup(GroupName,GroupPath)
	
	GroupName is a string that names the group to be created. If a group already
	exists, with the name specified by GroupName, the group window will be
	activated.
	
	GroupPath is a string that contains the path to the group file. If this parameter
	is omitted, Windows will use a default filename for the group in the Windows
	directory. This parameter is optional.
	
	ShowGroup()
	-----------
	
	The following is the syntax for the ShowGroup() command:
	
	  ShowGroup(GroupName,ShowCommand).
	
	GroupName is a string that names the group window to be altered.
	
	ShowCommand is an integer that specifies the action to be taken, based on the
	following list:
	
	  Value                    Meaning
	  -----                    -------
	
	  1                        Activates and displays the group
	                           window, or restores the group window
	                           if the group is currently iconic or
	                           maximized.
	
	  2                        Activates the group window and
	                           displays it as iconic.
	
	  3                        Activates the group window and
	                           displays it as maximized.
	
	  4                        Restores the group window in its
	                           most recent size and position and
	                           activates it (similar to Value 1).
	
	  5                        Activates the group window in its
	                           current size and position.
	
	  6                        Minimizes the group window.
	
	  7                        Displays the group window as
	                           iconic. The window that is
	                           currently active remains active.
	
	  8                        Displays the group window in its
	                           current state. The window that is
	                           currently active remains active.
	
	AddItem()
	---------
	
	The following is the syntax for the AddItem() command:
	
	  AddItem(CommandLine,Name,IconPath,IconIndex,xPos,yPos)
	
	CommandLine is a string that contains the full command line required to execute
	the application. At a minimum, this is the name of the application's executable
	file. It can also be the full pathname of the application and any parameters
	required by the application.
	
	Name is a string that supplies the title displayed below the icon in the group
	window. This parameter is optional.
	
	IconPath is a string that contains the name of the file containing the icon to be
	displayed in the group window. This can be either a Windows executable file or
	an .ICO (icon resource) file. If you do not supply IconPath, Program Manager
	uses the first icon in the file specified by CommandLine. If that file does not
	contain an icon, then Program Manager uses a default icon (DOS icon). This
	parameter is optional.
	
	IconIndex is an integer that specifies the index of the icon in the IconPath file
	that Program Manager is supposed to display. PROGMAN.EXE (Program Manager)
	contains five built-in icons that you can use for Windows or non-Windows
	programs. This parameter is optional.
	
	xPos & yPos are integers that specify the horizontal and vertical position of
	the icon within the group. You must use both parameters to specify the icon's
	position. If you do not specify the position, Program Manager places the icon in
	the next available space. These parameters are optional.
	
	DeleteGroup()
	-------------
	
	The following is the syntax for the DeleteGroup() command:
	
	  DeleteGroup(GroupName)
	
	GroupName is a string that names the group to be deleted.
	
	ExitProgman()
	-------------
	
	The following is the syntax for the ExitProgman() command:
	
	  ExitProgman(bSaveState)
	
	bSaveState is a boolean value that, if TRUE, instructs Program Manager to save
	its state before closing. If bSaveState is FALSE, Program Manager does not save
	its state.
	
	REFERENCES
	==========
	
	"Windows Software Development Kit, Guide to Programming." Chapter 22, pages
	19-22.
	
	TIPS.TXT file from the Windows SDK
	
	Additional query words: 3.00 3.00a 3.0a 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
