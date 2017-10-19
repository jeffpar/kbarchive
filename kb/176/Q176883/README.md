---
layout: page
title: "Q176883: WD97: Double-Clicking Graphic File in Explorer Opens in IE 4.0"
permalink: /kb/176/Q176883/
---

## Q176883: WD97: Double-Clicking Graphic File in Explorer Opens in IE 4.0

	Article: Q176883
	Product(s): Word 97 for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): word97 kbwdinternet
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	- Microsoft Internet Explorer version 4.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a graphic file in Windows Explorer, the graphic is opened
	in Internet Explorer 4.0, instead of the graphic program that you were
	previously using.
	
	For example, when you double-click a graphic file, the graphic should open in
	Photo Editor.
	
	NOTE: This problem occurs after you install Microsoft Internet Explorer 4.0 and
	affects the following graphic file types:
	
	- Graphics interchange format (GIF) (*.gif)
	
	- Joint Photographic Experts Group (JPEG) File Interchange Format (*.jpg)
	
	- Portable Network Graphics (*.png)
	
	- Photo CD Image (*.pcd)
	
	- PC Paintbrush (*.pcx)
	
	- Targa (*.tga)
	
	CAUSE
	=====
	
	This functionality is by design. When you install Microsoft Internet Explorer
	4.0, the associations of some registered graphic file types are changed to
	Internet Explorer (IEXPLORE).
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Rerun Office/Word Setup
	---------------------------------
	
	You can re-register Word (and all Office programs, if you run Office Setup) by
	running Setup with the /y switch using the following steps:
	
	1. Insert the Word or Office CD into the CD drive.
	
	  If you installed Word or Office from floppy disks insert the Setup Disk 1 in
	  the floppy disk drive of your computer.
	
	2. Click the Start button, and then click Run.
	
	3. In the Open box, type the following
	
	  <drive>:\Setup.exe /Y
	
	  where <drive> is the letter of the drive that contains the CD or Setup
	  Disk 1.
	
	4. Click OK.
	
	5. Click Reinstall.
	
	When the setup is complete, restart Windows. The file types of your graphics
	should now be associated with Photo Editor, just as they were before you
	installed Microsoft Internet Explorer 4.0.
	
	For additional information about setup switches, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q132374 OFF: How to Display Help on Running Setup Program with Switches
	
	
	Method 2: Manually Change the Graphic File Type Associations
	------------------------------------------------------------
	
	You can re-associate each of the graphic file types to any graphics editor. To
	re-associate your graphic files to Microsoft Photo Editor, follow these steps:
	
	1. Right-click the Start button and then click Explore.
	
	2. In Windows Explorer, on the View menu, click Folder Options (Options if you
	  are using Windows NT).
	
	3. Click the File Types tab.
	
	4. Under Registered File Types, select the graphic file type you want to change,
	  and then click Edit.
	
	5. In the Edit File Type dialog box, under Actions, click Open, and then click
	  the Edit button. In the "Editing action for type: <file type>" dialog
	  box, in the "Application used to perform action" box, type the path (or use
	  the Browse button) to the graphics program that you want to use to open this
	  type of graphic file, followed by a "%1" (you must include the quotation
	  marks), and then click OK.
	
	  For example:
	
	  "C:\Program Files\Common Files\Microsoft Shared\PhotoEd\PhotoEd.exe" "%1"
	
	  NOTE: The Use DDE check box is not selected.
	
	6. In the Edit File Type dialog box, under Actions, click Print, and then click
	  the Edit button. In the "Editing action for type: <file type>" dialog
	  box, in the "Application used to perform action" box, type the path (or use
	  the Browse button) to your graphics program you want to use to open this type
	  of graphic file, followed by /p "%1" (you must include the quotation marks),
	  and then click OK.
	
	  For example:
	
	  "C:\Program Files\Common Files\Microsoft Shared\PhotoEd\PhotoEd.exe" /p "%1"
	
	  NOTE: The Use DDE check box is not selected.
	
	7. In the Edit File Type dialog box, under Actions, click Printto, and then
	  click the Edit button. In the "Editing action for type: <file type>"
	  dialog box, in the "Application used to perform action" box, type the path
	  (or use the Browse button) to your graphic application you want to use to
	  open this type of graphic file, followed by /pt "%1" "%2" "%3" "%4" (you must
	  include the quotation marks), and then click OK.
	
	  For example:
	
	  "C:\Program Files\Common Files\Microsoft Shared\PhotoEd\PhotoEd.exe" /pt "%1"
	  "%2" "%3" "%4"
	
	  NOTE: The Use DDE check box is not selected.
	
	8. Repeat steps 4-7 for each graphic file type for which you want to change the
	  association.
	
	9. Click OK to close the Folder Options dialog box.
	
	Now when you double-click your graphic files, the graphic will open in Photo
	Editor.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129050 Err Msg: The Extension '.<ext>' Is Already In Use By File Type
	  '<Name>'
	
	
	Additional query words: ie ie4 ie40 photoed pe
	
	======================================================================
	Keywords          : word97 kbwdinternet 
	Technology        : kbWordSearch kbIEsearch kbWord97 kbWord97Search kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE400Win95 kbIE400WinNT400
	Version           : :4.0
	Issue type        : kbhowto kbprb kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
