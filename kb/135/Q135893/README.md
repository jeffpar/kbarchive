---
layout: page
title: "Q135893: Windows 95 Tips.txt File Contents"
permalink: /kb/135/Q135893/
---

## Q135893: Windows 95 Tips.txt File Contents

{% raw %}

	Article: Q135893
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenable win95 kbEnableSight kbEnableMove
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Tips.txt file included
	with Windows 95. Setup copies this file to the Windows folder.
	
	MORE INFORMATION
	================
	
	----------------------------------------------------------------------
	         Microsoft Windows 95 README for Tips and Tricks
	                              August 1995
	----------------------------------------------------------------------
	
	               (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	------------------------
	How to Use This Document
	------------------------
	
	To view Tips.txt on screen in Notepad, maximize the Notepad window.
	
	To print Tips.txt, open it in Notepad or another word processor,
	and then use the Print command on the File menu.
	
	Contents
	--------
	MS-DOS Command Prompt
	Cut, Copy, Paste, Drag and Drop
	File Operations
	Folders and Windows Explorer
	Hardware Profiles
	Keyboard Shortcuts
	Mobile Computing
	Multimedia and Sound
	Network
	Run Dialog Box
	Start Menu
	Taskbar
	System Tools
	Window Management
	Miscellaneous Tips and Tricks
	
	Note: You can find other tips besides those in this readme in the Help
	     Contents, under "Tips and Tricks."
	
	MS-DOS Command Prompt
	---------------------
	
	[Visual Display of Directory from Command Prompt]
	If you are at a command prompt and want a visual display of a
	directory (folder), type "start .", or "start .." and an open folder
	of that directory appears on the desktop.
	
	[Drag and Drop Filenames to Command Prompt]
	You can drag file and folder icons from the desktop or a folder to an
	MS-DOS command prompt. The filename is then in the keyboard buffer
	of the running MS-DOS-based application.
	
	[Copy/Paste Information From/To Command Prompt]
	Activate the toolbar in the MS-DOS-based program window to gain point-
	and-click access to copy, cut, and paste operations from a Windows-
	based program to an MS-DOS-based program. For example, copy a folder
	output on the screen, and then paste it into mail.
	
	[Starting Windows-Based Programs from a Command Prompt]
	You can start Windows-based programs from a command prompt by typing
	the name of the program you want to run, and then specifying any
	parameters as needed. For example, to start Notepad, type "notepad" at
	the command prompt, and then press Enter. You can also start Windows-
	based programs in batch files.
	
	You can also use the Start command to start a program or open a
	document.
	
	For example: C:>start Docname.ext).
	
	[Command.pif]
	If you set the properties for an MS-DOS prompt the wrong way, and you
	can't open an MS-DOS window, go into the PIF directory and edit
	Command.pif, or find Command.com and edit the properties there.
	
	[DOSKEY]
	If you want to use DOSKEY in an MS-DOS window without loading it in
	Autoexec.bat or creating a startup batch script, you can go to the
	Program properties and enter doskey as the startup batch file. If you
	decide later that you want to have a real startup batch file, simply
	move DOSKEY into this batch file.
	
	[Directory Shortcuts]
	Related directories have the following shortcuts:
	. = current directory
	.. = parent directory
	... = parent directory once removed directory (new in Windows 95)
	.... = parent directory twice removed (new in Windows 95)
	For example, if you are in the C:\Windows\System\Viewers directory,
	and you enter cd... at the command prompt, the directory changes to
	C:\.
	
	[Command Line Parameters]
	Add a "?" to the command line of MS-DOS programs, and you will be
	prompted to add parameters when you start the program. This is
	especially useful with MS-DOS program shortcuts.
	
	[Easy Disk Copy From the Desktop]
	Create a shortcut on the desktop with diskcopy a: a: at the command
	prompt to copy a disk (substitute b: to use b: drive).
	
	Cut, Copy, Paste, Drag and Drop
	------------------------------
	
	[Drag and Drop]
	To move an object, use the left mouse button to drag the object from
	one folder to another on the same drive. Use Shift+Left-drag to force
	a move.
	
	To copy an object, use the left mouse button to drag the object from
	one folder to another on a different drive. Use CTRL+Left+drag to
	force a copy.
	
	To create a shortcut to an executable, use the left mouse button to
	drag an executable file to a new folder.
	
	Use the right mouse button to drag an object from one folder to
	another, and then select 'Create Shortcut(s) Here' to create a
	shortcut to that object. The icon annotations indicate what
	will happen: a plus sign for copy, an arrow for a shortcut, and no
	symbol for a move. Press ESC while you are dragging the object to
	cancel the action.
	
	To create document shortcuts: Right drag a selection from an OLE
	document (for example, Word 95) onto the Desktop or folder, and then
	select "Create Document Shortcut Here." This document shortcut will
	open the original document at the place in the document that the
	shortcut originated.
	
	To create document scraps: Use the left mouse button to drag a
	selection from an OLE document (for example, Word 95) onto the desktop
	or folder to create a scrap (a scrap is an OLE object that contains
	the selection). Drop the scrap onto another document or back onto the
	original document to insert or render it (whichever is most
	appropriate).
	
	[Right Drag and Drop]
	Right drag and drop works like left drag and drop except that a menu
	is displayed when you drop the object. The menu for folders displays
	these commands: Move Here, Copy Here, Create Shortcut(s) Here. The
	menu for OLE objects includes:  Create Scrap Here, Move Scrap Here,
	Create Document Shortcut Here).
	
	[Drag to the Taskbar]
	You can drag objects from one open document to another open document
	(one covering the other) by dragging the object to the target's
	taskbar, waiting until the target window is displayed, and then
	dragging the object onto the target window.
	
	File Operations
	----------------
	
	[Creating a New File]
	Create a new file by using the right mouse button to click the desktop
	or folder, point to New, and then click the type of file you want to
	create from the list.
	
	[Create a New Folder While Saving a File]
	When using the Save As command to save a file, you can also create a
	new folder in which to store the file. Use the right mouse button to
	clickthe dialog box list, point to New, and then click Folder. Double-
	click the new folder to open it, and then continue the save process.
	
	[Deleting Files Without Moving them to Recycle Bin]
	Select the file or files to be deleted. Use the right mouse button to
	clickthe selection, and then hold down the Shift key and click Delete
	(or hold down the Shift key when pressing the Delete key if using the
	keyboard).
	
	[Copying and Moving Files]
	Use the right mouse button to click the files you want to copy or
	move, and then click Copy or Cut. Open the destination location, and
	then click the right mouse button and select Paste.
	
	Folders and Windows Explorer
	----------------------------
	
	[Selecting Multiple Files]
	Selecting multiple files in large icon view works differently from
	list view. To extend a selection, click the first icon, and then hold
	down the Shift key while you click the last icon to be selected. To
	change an icon from selected to unselected, hold down the CTRL key
	while you select the icon.
	
	[Keyboard Shortcuts]
	* Press Win+E to start Windows Explorer by pointing to 'My Computer'
	(on Microsoft Natural Keyboard).
	* Press Backspace to display the parent folder.
	* To select all files is a folder, press CTRL+A.
	* Press F5 to update the contents list.
	
	[Special Folders]
	You can put the contents of Control Panel or other special folders on
	your Start menu (or in any folder). Create a folder by clicking New on
	the File menu, and then clicking Folder. Then, paste in the
	appropriate name  as shown below:
	
	For                Use This Name
	----------------------------------------------
	Control Panel      Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}
	Dial Up Network   Dial Up Net.{992CFFA0-F557-101A-88EC-00DD010CCC48}
	Printers           Printers.{2227A280-3AEA-1069-A2DE-08002B30309D}
	
	[Windows Explorer Switches]
	Windows Explorer switches are useful in creating rooted folders:
	
	    Explorer [/e][,/root,<object>][[,/select],<sub object>]
	
	/e
	  Use Explorer view (scope and results pane view). The default is
	  Open view (results in pane view only).
	
	/root<object>
	  Specify the object in the "normal" name space that is
	  used as the root (top level) of this Explorer/Folder (i.e., local
	  path or UNC name). The default is the Desktop).
	/Select
	  The parent folder opens and the specified object is selected.
	  <sub object>   Specify the folder unless /select is used. The
	  default is the root.
	
	Examples:Explorer /e, /root, \\Reports
	
	        opens an Explorer window at \\Reports.
	
	        Explorer /select, C:\Windows\Calc.exe
	
	        opens a folder at C:\Windows (or activates one that is
	        currently open) and selects Calc.exe.
	
	        Explorer/e,/root,\\Source\Internal\Design\Users\David\Archive
	
	        opens a folder to the Archive folder above. This is a good
	        way to create a dedicated, remote, documents archive
	        folder. A link to this folder (\\Source\Internal\Design\ 
	        Users\David\Archive) can then be placed in the SendTo folder
	        for quick routing of documents.
	
	Hardware Profiles
	------------------
	
	Hardware Profiles are used to set up multiple hardware configurations.
	This is especially useful for laptops that have docking stations or
	workstations with removable storage media.
	
	The following example demonstrates how to set up hardware profiles for
	a laptop with a docking station that has this configuration:
	
	Configuration      Docked         Undocked
	---------------------------------------------------------
	Display driver        S3                  VGA
	Network             w/Microsoft Network None
	RNA                 no RNA              with RNA
	
	[Open Systems Properties:]
	1. Use the right mouse button to click the My Computer icon.
	2. Click Properties, and then click the Hardware Profiles tab.
	3. Verify that two hardware profile options labeled Docked and
	  Undocked exist. If these options are not available, highlight
	  Original Configuration, and then click Rename. Type DOCKED and then
	  click OK. Highlight the word DOCKED and then click Copy. In the
	  Copy Profile Dialog Box type UNDOCKED.
	
	[To Set Up the Video Driver for Docked and Undocked Configurations]
	First, verify that VGA is installed. If it is not installed, double-
	click the Display icon in Control Panel. Click the Settings tab, and
	then click Change Display Type. In the Adapter Type area, click
	Change, and then  install the VGA driver.
	1. In Control Panel, double-click the System icon, and then click the
	  Device Manager tab.
	2. Double-click Display Adapter, and then double-click VGA.
	3. In the Device Usage area, make sure Undocked is checked and Docked
	  is unchecked. Click OK.
	4. In the Device Manager tab, double-click Display Adapter, and then
	  double-click the S3 adapter.
	5. In the Device Usage area, make sure the Docked option is checked
	  and the Undocked option is unchecked.
	6. Click OK to exit Device Manager.
	
	[To Set Up for No Network in an Undocked State]
	1. In Control Panel, double-click the System icon, and then click the
	  Device Manager tab.
	2. Double-click Network Adapter, and then double-click the network
	  card.
	3. In the Device Usage area of the General tab, remove the check mark
	  from the Undocked option. Click OK, and then return to Device
	  Manager.
	
	[To set up for no RNA while docked]
	1. Repeat Step 1.
	2. Double-click the Dial-up Networking adapter. Remove the check mark
	  for the Docked option.
	
	Keyboard Shortcut Keys
	----------------------
	
	[Hot and Other Keys]
	*General folder / Windows Explorer shortcuts for a selected object:
	
	Keys                  Action
	-----------------------------------------------------------------
	F2                  Rename
	F3                  Find
	CTRL+X, C, or V     Cut, Copy, or Paste
	SHIFT+DELETE        Delete immediately without putting the file
	                   in Recycle Bin
	ALT+ENTER           Properties
	ALT+double-click    Properties
	CTRL+right-click    Put alternative verbs on the context menu
	                   (Open With)
	SHIFT+double-click   Explore the object if it has an Explore
	                   command
	
	CTRL+drag a file
	to a folder         Copy a file
	
	CTRL+SHIFT+drag a
	file to the desktop
	or a folder         Create a shortcut
	
	CTRL+ESC,ESC,TAB,
	SHIFT+F10             Open taskbar properties
	
	[General control over folders/Windows Explorer]
	
	F4 (Explorer)        Displays the combo box
	F5                  Refresh
	F6                  Switches between panes in Windows Explorer
	CTRL+G(Windows
	Explorer)             Goto
	CTRL+Z              Undo
	CTRL+A              Select all
	BACKSPACE           Goes to the parent folder
	SHIFT+<close>       Closes this folder and all its parent folders
	
	[In Windows Explorer]
	Num*                  Expands everything under selection
	Num-                Expands selection
	Num+ or Right arrow Collapses selection
	Right arrow         Expands current selection if it's collapsed;
	                   otherwise goes to the first child.
	Left arrow          Collapses current selection if it's expanded;
	                   otherwise goes to the parent
	
	[In Properties]
	CTRL+TAB or
	CTRL+SHIFT+TAB      Switches between Properties tabs
	
	[In Open/Save Common Dialog Boxes]
	F4                  Drop down the location list
	F5                  Refresh the view
	Backspace           Go to parent folder if focus is on view window
	
	[General Keyboard-Only Commands]
	F1                  Help
	F10                 Goes to menu mode
	SHIFT+F10           Context menu for selected item
	CTRL+ESC            Brings up Start menu
	CTRL+ESC, ESC       Focus on the Start button
	SHIFT+F10           Context menu
	ALT+TAB             Switch to the running program
	SHIFT while
	inserting CD        Bypasses auto-run
	Alt+M when focus
	is on taskbar       Minimizes all windows
	
	[Accessibility Shortcuts]
	Tap SHIFT 5 times   Toggles StickyKeys on/off
	Hold down Right
	SHIFT for 8 seconds Toggles FilterKeys on/off
	Hold down NumLock
	for 5 seconds       Toggles ToggleKeys on/off
	
	Left ALT+LEFT+SHIFT
	+NumLock            Toggles MouseKeys on/off
	Left ALT+LEFT+SHIFT
	+PrintScreen        Toggles HighContrast on/off
	
	[MS Natural Keyboard]
	Win+R               Run dialog
	Win+M               Minimize All
	Shift-Win+M         Undo Minimize All
	Win+F1              Windows Help
	Win+E               Explorer
	Win+F               Find Files or Folders
	CTRL+Win+F          Find Computer
	Win+Tab             Cycle through taskbar buttons
	Win+Break           PSS Hotkey... (System properties)
	
	Mobile Computing
	-----------------
	
	[Automatic Synchronizing of Files on Laptop]
	If you have files that you want to keep synchronized between your
	portable, your office desktop, and your home computer, you should
	create Briefcases on both your desktop computers, and then keep the
	files on your portable. Drag the documents from your portable to the
	Briefcase on each desktop computer. Then, each time you connect your
	portable to a docking station, the Briefcase on the desktop computer
	synchronizes the files.
	
	[Creating a Second Undocked Configuration]
	To create a second, undocked configuration for your portable (for
	example, one configuration has a printer and the other does not),
	follow these steps:
	
	1. Make sure your computer is in the configuration you want, and then
	  use the right mouse button to click the My Computer icon.
	2. Click Properties, and then click the Configuration tab.
	3. Select the undocked configuration, and then choose Copy.
	4. Select the new configuration and give it a unique name.
	5. Go to Device Manager and click Refresh. This will re-enumerate all
	  the hardware devices on your system and build the new
	  configuration.
	
	[Viewing Remaining Battery Life of Laptop]
	For computers with APM functionality, click the Battery icon on the
	taskbar to view a detailed battery meter.
	
	Multimedia and Sound
	---------------------
	
	To remove Auto Run when an audio CD is inserted, hold down the Shift
	key when you insert the CD-ROM, or make the following changes:
	
	1. Open a folder (for example, My Computer).
	2. On the View menu, click Options, and then click File Types.
	3. Click AudioCD, and then click Edit.
	4. In the Action list, click Play.
	5. Click Set Default to turn off Auto Run.
	
	Note: If the Play command is bold, the CD will play when it is
	inserted, if Play is not bold, it will not.
	
	[Opening the Media Player From an AVI]
	When an AVI file is playing, you can open Media Player by double-
	clicking the title bar of the AVI. Double-click the Media Player title
	bar to exit.
	
	[Master Volume Icon]
	You can put a master volume control on the taskbar by following these
	steps:
	
	1. In Control Panel, double-click the Multimedia icon.
	2. Click the Audio tab, and then click Show Volume Control on the
	  taskbar.
	3. Click the volume (speaker) icon on the taskbar to open the master
	  volume control. Double-click the volume (speaker) icon to open
	  Volume Control.
	
	[Cache Size for CD-ROMs]
	You can set the cache size for CD-ROMs via the System icon in Control
	Panel.
	
	1. Double click the System icon in Control Panel, and then click the
	  Performance tab.
	2. Click File System to view the CD-ROM optimization control.
	
	[Assigning Sounds to Events]
	To assign sounds to events, double-click the Sounds icon in Control
	Panel.
	
	Network
	-------
	
	[Hints]
	Instead of connecting a drive letter to a network share, put shortcuts
	to those shares on your desktop or Start menu (for example, add a
	shortcut to \\documents\user\dave instead of redirecting this share to
	drive Z). This way, network shares are only connected when needed.
	
	If you work in a group, you may want to keep a folder on a public
	server for shortcuts to useful network locations. Interested
	individuals can keep a shortcut to this folder on their desktop for
	quick access.
	
	[Searching for a File on a Remote Server]
	1. Click the Start button, point to Find, and then click Files or
	  Folders.
	2. Enter the file name in the Named box.
	3. Enter the path in the Look In box, and then press Enter.
	
	[Easy Access to Network Information]
	Add shortcuts to network locations in Network Neighborhood. They'll
	stay there when you're logged off the network and will cascade to
	Dial-Up Networking features as long as they are installed.
	
	[Easy Connection to a Network Server/Share]
	Click the Start button, click Run, and then enter the UNC path. For
	example, entering \\server will open a window showing shared resources
	for the computer named server. Entering \\server\share\direct opens
	the folder named direct on the \\server\share share point.
	
	[Easy Access to Network Properties]
	Use the right mouse button to click Network Neighborhood to view
	network properties.
	
	Run Dialog Box
	---------------
	
	[Via the Keyboard]
	Press CTRL+ESC+R to open the Run dialog box.
	On a Microsoft Natural Keyboard, press Win+R to open the Run dialog
	box.
	
	[Opening a Folder Anywhere From the Run Dialog Box]
	To open a folder, enter its local path or UNC path. For example,
	entering C:\Windows\System will open the System folder.
	Entering \\server\share\direct will open a folder pointing to the
	direct folder on the \\server\share share point.
	
	[Running a Program]
	You can run a program from within any folder by opening that folder
	and then clicking Run from the Start Menu.
	
	Start menu
	-----------
	
	[Keyboard Shortcuts]
	Press CTRL+ESC to display the Start menu.
	On a Microsoft Natural Keyboard, press a Win key to display the Start
	menu.
	
	[Adding items to the Start Menu]
	Drag an object (a folder, shortcut, program, or document) onto the
	Start menu to add it to the top of the Start menu. If the object is a
	folder, the folder contents is displayed when you point to that menu
	item.
	
	[Modifying Start Menu Items]
	Use the right mouse button to click the Start menu, and then select
	Open or Explore to view and modify its contents.
	
	[Quick Access to Start Menu Items]
	You can quickly open programs at the top of the Start menu by
	numbering the icons (rename them with a number before the name). Then,
	press CTRL+ESC followed by the number to start those programs.
	
	[Emptying the Documents menu]
	1. Click the Start menu, point to Settings, and then click Taskbar.
	2. Click the Start Menu Programs tab, and then click Clear.
	
	Taskbar
	-------
	
	[Taskbar Background]
	To open the taskbar's context menu when the taskbar is full, move the
	mouse pointer to the edge of the taskbar, and then use the right mouse
	button to click the taskbar. You can also do this to drag the taskbar.
	
	[Hiding the Taskbar]
	1. Use the right mouse button to click the Start button, and then
	  click Properties.
	2. Click the Taskbar Options tab, and then click Auto Hide.
	  When the mouse moves near the taskbar area, the taskbar appears.
	
	[Moving the Taskbar]
	You can drag the taskbar to any side of the desktop area.
	
	[Languages and Keyboard Layouts]
	To change keyboard layouts while you work, make these changes:
	1. In Control Panel, double click the Keyboard icon.
	2. Click the Language tab, and then add another language as needed.
	3. Make sure the Enable Indicator on Taskbar is checked.
	  When you complete this setup, a Language layout icon appears on the
	  taskbar. You can click the icon to select another language.
	
	System Tools
	------------
	[System Monitor]
	Monitors system resources, threads, processor usage, etc.
	
	[DriveSpace]
	You can use DriveSpace to compress hard and floppy disks, which
	creates more free space on the disks. You can also use DriveSpace to
	configure disk drives that you have already compressed using
	DoubleSpace or DriveSpace.
	
	[Backup/Restore]
	You can use Backup to back up or restore files to tape, floppy,
	network shares, etc.
	
	[Disk Defragmenter]
	Use to speed up your hard disk by defragmenting the files on your hard
	drive.
	
	[Netwatcher]
	You can see who is currently using resources on your computer by using
	NetWatcher. You can also add shared folders and disconnect people from
	your computer or from specific files.
	
	[ScanDisk]
	You can use ScanDisk to check your hard drives for both logical and
	physical errors. ScanDisk will detect any errors, and then repair
	damaged areas.
	
	Window Management
	------------------
	[Switching Between a Window and a Full MS-DOS Screen]
	Press ALT+Enter.
	
	[Closing Consecutive Windows]
	If you are using multiple window browse, and you want to close all
	open windows, hold down the Shift key, and then click the close (X)
	button in the upper right corner of the title bar.
	
	[Cascading, Tiling, and Minimizing All]
	Use the right mouse button to click the taskbar, and then click an
	option.
	
	Miscellaneous Tips and Tricks
	-----------------------------
	
	[Configuration Summary]
	To print a copy of your system configuration summary, double-click the
	Systems icon in Control Panel, and then click the Device Manager tab.
	Click Computer, and then click Print.
	
	[Quick View]
	If Quick View is installed, and if Quick View supports a particular
	file format, you can quickly view the contents of that file by using
	the right mouse button to click it, and then select Quick View.
	
	You can also create a link to Notepad.exe in your SendTo folder. Then,
	use the right mouse button to click the file you want to view. Click
	Sent To, and then click Notepad.
	
	[Disk Tools]
	Use the right mouse button to click a drive in My Computer, and then
	click Properties. Click the Tools tab to use ScanDisk, Backup, and
	Defragmenter.
	
	[Converting Windows 3.1 Program Groups]
	You can convert Windows 3.1 program groups in two ways:
	1. Double-click a .grp file to automatically convert it to a Windows
	  95 folder.
	2. Run the GRPCONV command with the /m parameter to display a dialog
	  box in which you can select groups to convert.
	
	[Open With]
	To open an associated file with a different program, hold down Shift,
	and then use the right mouse button to click the file. Click Open With
	on the menu to open the file with a different program.
	
	[Hotkey]
	In Windows 95, hotkeys assigned to shortcuts in the Start Menu or
	its subfolders can be used to start programs any time.
	
	[Screen Resolution]
	To quickly change screen resolution for different applications, use
	the right mouse button to click the desktop, and then click the
	Settings tab. In the Desktop Area, move the slider bar to the desired
	resolution.
	
	[Context Help]
	On the upper right side of each dialog box is a question mark button
	(?). Click it and then click a control or item in the dialog box. A
	short description of the item appears.
	
	[Find Tool]
	To find a file, mail message, computer, or file on The Microsoft
	Network, use the Find command on the Start menu. In addition, you can
	save a search in the Find dialog box by clicking Save Search on the
	File menu.
	
	[Bitmap Viewer]
	MS Paint can serve as a bitmap viewer. Drag a bitmap icon onto an MS
	Paint window to view it.
	
	[File Names and Extensions]
	The following are valid filenames for Windows 95 applications:
	    12345678.ABC (MS-DOS name)
	    12345678.ABCDEF (no limit on extensions)
	    123456789012345678901234567890123456789.ABC (long filename)
	    1234567890123456789012345678901234567890.ABCDEF (long filename
	    and long extension)
	
	This is a valid filename (long names with spaces that mean something).
	To see the MS-DOS name associated with a long filename, use the right
	mouse button to click the file, and then click Properties.
	
	[Developer's Trick]
	If you need to restart the taskbar (for example, when you've changed a
	registry entry that you want to use), you can use CTRL+ALT+DEL to
	remove Windows Explorer. When the Shutdown dialog box appears, click
	No. At the next prompt, click End Task. The taskbar is removed, and
	then restarts.
	
	[Making an Emergency Startup Disk]
	To create a complete emergency startup disk, double-click the
	Add/Remove Programs icon in Control Panel, and then click the Startup
	Disk tab.
	
	[Undoing a File Move or File Rename]
	If you forget where you just moved a file, or if you accidentally
	rename a file, click Undo from the Edit menu (or press ALT+Backspace).
	
	[Display Properties]
	Use the right mouse button to click the desktop, and then click
	Properties to change the desktop background, screen saver, appearance,
	or video settings. To change your primary display font, change the
	icon font on the Appearance tab.
	
	[Tips for Using the Taskbar Clock]
	Hold the mouse pointer over taskbar clock to see the date.
	
	Double click the taskbar clock to set the system time, date, and time
	zone.
	
	To remove the clock from the taskbar:
	1. Use the right mouse button to click the taskbar, and then click
	  Properties.
	2. Click the Taskbar Options tab, and uncheck Show Clock (or press C).
	
	[Easy Access to Computer Properties]
	To view your computer (system) properties, use the right mouse button
	to click My Computer and then click Properties. If you have a
	Microsoft Natural Keyboard, press Win+Break.
	
	To view Network properties, use the right mouse
	button to click Network Neighborhood, and then click Properties.
	
	[Using the Cursor Keys Instead of a Mouse]
	You can move the cursor without using the mouse by turning on
	MouseKeys. Double-click the Accessibility Options icon in Control
	Panel, click themouse tab, and then click Use MouseKeys.
	
	[Easy Way to Access Control Panel]
	1. Use the right mouse button to click the Start menu, and then click
	  Explore.
	2. Make a new directory in  the Start Menu folder named Control Panels
	 (or whatever you want).
	3. Open the original Control Panels folder, select all the icons, and
	  then use the right mouse button to drag them into your new folder.
	  This creates shortcuts to all the Control Panel icons.
	4. Close everything, and then click the Start menu. When you point to
	  your new folder, you should see all the Control Panel icons.
	
	[Sending Objects by Using Send To]
	You can drag any shortcut to the SendTo folder. This shortcut could be
	to a printer, fax, network drive, or Windows application. To find the
	SendTo folder, click the Start button, and then click Run. Type Sendto
	in the Run dialog box. Use the right mouse button to drag the item's
	icon into the Send To window. The shortcut will appear on the Send To
	menu. Use the right mouse button to click a document or folder icon,
	select Send To, and then select a destination item.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenable win95 kbEnableSight kbEnableMove 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
