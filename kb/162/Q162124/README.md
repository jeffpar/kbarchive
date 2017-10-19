---
layout: page
title: "Q162124: CG3: Clip Gallery General Troubleshooting Tips Part 1 of 2"
permalink: /kb/162/Q162124/
---

## Q162124: CG3: Clip Gallery General Troubleshooting Tips Part 1 of 2

	Article: Q162124
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtshoot kbdta
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery for Windows 95, version 3.0 
	- Microsoft Publisher 97 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Word 97 for Windows 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article contains information to help you troubleshoot problems you may
	encounter when you start Microsoft Clip Gallery from another program. This
	article covers the following types of errors:
	
	- Server Application or Source File cannot be found
	
	- Invalid Page Fault in module <Name of Module>
	
	- General Protection Fault in Module <Name of Module>
	
	- Clip Gallery can not run because the database has been marked read-only
	
	- Clip Gallery does not start and no errors are displayed
	
	This article is the first of two articles that provide troubleshooting
	information for Clip Gallery. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q162128 CG3: Clip Gallery General Troubleshooting Tips Part 2 of 2
	
	If your topic is not covered in this article, query on the article title in the
	Microsoft Knowledge Base.
	
	MORE INFORMATION
	================
	
	Although you can start with any of the following troubleshooting techniques,
	Microsoft recommends that you start at the top of the list and continue
	troubleshooting until your problem is resolved or diagnosed.
	
	Does Clip Gallery Function Correctly in Another Program?
	--------------------------------------------------------
	
	1. Start WordPad. To do this, click the Start button, point to Programs, point
	  to Accessories, and click WordPad.
	
	  NOTE: You can use any program that has an Insert Object command to run the
	  tests. In this article, WordPad was chosen to perform the Clip Gallery tests
	  because it comes with Windows 95 and Windows NT 4.0.
	
	2. On the Insert Menu, click Object, and then click Microsoft Clip Gallery.
	  Click OK.
	
	If Clip Gallery starts from another program, Clip Gallery is functioning
	properly. Your troubleshooting steps should now focus on the client program (the
	program you are trying to use Clip Gallery with). Please consult your
	documentation to troubleshoot the client program.
	
	If Clip Gallery does not start, proceed to the next section.
	
	Does Clip Gallery Run from the Compact Disc?
	--------------------------------------------
	
	NOTE: If you have Publisher 97 on floppy disks, proceed to the "Test for a
	Corrupted Artgalry.cag File" section of this article.
	
	1. Insert the Publisher 97 or Office 97 compact disc into the CD-ROM drive.
	
	2. Start Windows Explorer and switch to the Shared\Artgalry folder on the
	  compact disc. For example, if your CD-ROM drive is drive D, go to
	  D:\Shared\Artgalry.
	
	3. Double-click Artgalry.exe from the compact disc. This registers the program
	  as a shared application in the registry of the operating system.
	
	  NOTE: If you receive an error message when you try to register Artgalry.exe
	  from the compact disc, you may be experiencing problems with the registry or
	  with the compact disc.
	
	4. Start WordPad. To do this, click the Start button, point to Programs, point
	  to Accessories, and click WordPad.
	
	5. On the Insert Menu, click Object, and then click Microsoft Clip Gallery.
	  Click OK.
	
	6. If Clip Gallery starts from the compact disc, the copy of Artgalry.exe on
	  your hard disk may be corrupted.
	
	  To copy the contents of the Artgalry folder to your hard disk, follow these
	  steps:
	
	  a. Copy the contents of the Shared\Artgalry folder (except the Artgalry.cag
	     file, which is already on your hard disk), to the Program Files\Common
	     Files\Microsoft Shared\Artgalry folder.
	
	  b. Double-click the Artgalry.exe file to register the copy on your hard disk.
	
	7. To see if Clip Gallery now runs from your hard disk, follow these steps:
	
	  a. Click the Start button, point to Programs, point to Accessories, and click
	     WordPad.
	
	  b. On the Insert Menu, click Object, and then click Microsoft Clip Gallery.
	     Click OK.
	
	If Clip Gallery does not run, proceed to the next section.
	
	Test for a Corrupted Artgalry.cag File
	--------------------------------------
	
	1. Rename the Artgalry.cag file. To do so:
	
	  a. Find the Artgalry.cag file. This file is usually located in the Program
	     Files\Common Files\Microsoft Shared\Artgalry folder.
	
	  b. Right-click the file icon, click Rename on the shortcut menu, and then
	     enter a new name, such as Artgalry.old.
	
	2. Try starting Clip Gallery again. To do so:
	
	  a. Start WordPad. To do this, click the Start button, point to Programs,
	     point to Accessories, and click WordPad.
	
	  b. On the Insert menu, click Object.
	
	  c. In the Object Type list, click Microsoft Clip Gallery, and then click OK.
	
	  NOTE: If the Artgalry.cag file is missing, Clip Gallery creates a new one when
	  you start Clip Gallery. Artgalry.cag is a database file that stores the clip
	  preview images and catalogs the location of each image. Clips you may have
	  manually added to Clip Gallery from other sources are now unavailable.
	  However, this does not remove clipart from Office 97, PowerPoint 97, or
	  Publisher 97, because these programs use concurrent databases and are not
	  affected if you delete the Artgalry.cag file.
	
	  For more information on creating a custom Artgalry.cag, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q161718 CG3: Creating Clip Gallery Packages
	
	If Clip Gallery does not run, proceed to the next section.
	
	Check the Registry Entries for Clip Gallery
	-------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	If you are running Windows NT or Windows 2000, you should also update your
	Emergency Repair Disk (ERD).
	
	NOTE: The following steps assume you are running Windows 95 or Windows NT 4.0, or
	Windows 2000. (If you are running Windows NT 3.51, substitute regedt32.exe in
	step 1.)
	
	1. On the Start menu, click Run. Type "regedit" (without the quotation marks) in
	  the Open box, and then click Open. This starts the Registry Editor.
	
	2. Locate the following registry key:
	
	     My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery\CLSID
	
	  a. Double-click the HKEY_CLASSES_ROOT key. The key looks similar to a folder
	     you would see in Windows Explorer.
	
	  b. Double-click the MS_ClipArt_Gallery key. You may need to scroll through
	     the Registry Editor window to find the key.
	
	  c. Click the CLSID key.
	
	  d. Verify the value of the key. The MS_ClipArt_Gallery\CLSID key should have
	     the following data value:
	
	         Name        Data
	         ----        ----
	         (Default)   "{00030026-0000-0000-C000-000000000046}"
	
	3. Locate the following registry key:
	
	     My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery\protocol\ 
	     StdFileEditing\server
	
	  Verify the value of the key. The MS_ClipArt_Gallery\protocol\
	  StdFileEditing\server key should have the following data value:
	
	     Name        Data
	     ----        ----
	     (Default)   "C:\PROGRA~1\COMMON~1\MICROS~1\ARTGALRY\ARTGALRY.EXE"
	
	4. Locate the following registry key:
	
	     My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery.2\CLSID
	
	  Verify the value of the key. The MS_ClipArt_Gallery.2\CLSID entry should have
	  the following data value:
	
	     Name        Data
	     ----        ----
	     (Default)   "{00021290-0000-0000-C000-000000000046}"
	
	5. Locate the following registry key:
	
	     My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery.2\protocol\ 
	     StdFileEditing\server
	
	  Verify the value of the key. The MS_ClipArt_Gallery.2\protocol\
	  StdFileEditing\server entry should have the following data value:
	
	     Name        Data
	     ----        ----
	     (Default)   "C:\PROGRA~1\COMMON~1\MICROS~1\ARTGALRY\ARTGALRY.EXE"
	
	  The Data value should be the path to your Artgalry.exe file.
	
	  NOTE: The path uses MS-DOS names. This is why you are seeing PROGRA~1 instead
	  of the long name: Program Files.
	
	6. Locate the following registry key:
	
	     My Computer\HKEY_CLASSES_ROOT\CLSID\ 
	     {00021290-0000-0000-C000-000000000046}\LocalServer32
	
	  Verify the value of the key. The LocalServer32 entry should have the following
	  data value:
	
	     Name        Data
	     ----        ----
	     (Default)   "C:\PROGRAM FILES\COMMONFILES\ 
	                 MICROSOFT SHARED\ARTGALRY\ARTGALRY.EXE"
	
	  This path uses long file names.
	
	7. Export the Clip Gallery Keys.
	
	  If any registry entries for Clip Gallery are invalid (for your specific
	  computer and its drive structure) or are missing, you should remove the
	  complete registry keys for Clip Gallery, and then restore them.
	
	  NOTE: If all Clip Gallery registry keys are correct, proceed to the next
	  section.
	
	  a. Locate the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\CLSID\ 
	         {00021290-0000-0000-C000-000000000046}
	
	  b. On the Registry menu, click Export Registry File. The Export Registry File
	     dialog box appears.
	
	  c. Save the Registry file on your desktop, and name it Clsidcag3.reg or
	     something similar.
	
	  d. Locate the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery
	
	  e. On the Registry menu, click Export Registry File.
	
	  f. Save the Registry file on your desktop. Use a name, such as Cag1.reg.
	
	  g. Locate the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery.2
	
	  h. On the Registry menu, click Export Registry File.
	
	  i. Save the Registry file on your desktop and name it Cag2.reg.
	
	8. Delete the Clip Gallery Keys.
	
	  NOTE: If you have not exported the Clip Gallery Keys, follow the instructions
	  in step g of this section, and export the keys before you continue.
	
	  a. Locate the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\ 
	         CLSID\{00021290-0000-0000-C000-000000000046}
	
	  b. Press DELETE, and then click Yes on the Confirm Key Delete dialog box to
	     delete the entry.
	
	  c. Select the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery
	
	  d. Press DELETE, and then click Yes to delete the entry.
	
	  e. Select the following key:
	
	         My Computer\HKEY_CLASSES_ROOT\MS_ClipArt_Gallery.2
	
	  f. Press DELETE and then click Yes to delete the entry.
	
	  g. After you remove the Registry entries, start Windows Explorer and locate
	     the Program Files\Common Files\Microsoft Shared\Artgalry folder.
	     Double-click the Artgalry.exe file. This registers the Clip Gallery with
	     correct entries.
	
	9. Try to start Clip Gallery again. If it does not start, proceed to the next
	  section.
	
	For additional information about the Registry, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q138100 ClassId Numbers for Shared Applications
	
	  Q134863 OFF: How to Reregister Shared Programs in Office 95 & 97
	
	Does Clip Gallery Work in Safe Mode? (Windows 95 only)
	------------------------------------------------------
	
	NOTE: If you are running Windows NT, skip this section and proceed to the "Check
	the Dates of the OLE32 DLL Files" section.
	
	1. Quit any programs you are running.
	
	2. Click Start, and then click Shut Down to display the Shut Down Windows dialog
	  box.
	
	3. On the Shut Down Windows dialog box, click Restart The Computer.
	
	4. When you see "Starting Windows 95" as the computer starts, press F8 to
	  display the Microsoft Windows 95 Startup Menu.
	
	5. Choose item #3 (Safe mode) on the menu. This starts Windows 95 in Safe Mode
	  without network support. After you are running in Safe Mode, the words Safe
	  Mode appear in all four corners of the screen.
	
	  NOTE: If you are running a shared copy of Microsoft Office, choose item #4
	  (Safe mode with network support) to test the problem.
	
	6. After Windows 95 starts in Safe mode, open WordPad. Click Start, point to
	  Programs, point to Accessories, and then click WordPad.
	
	7. Start Microsoft Clip Gallery.
	
	  a. On the Insert menu, click Object.
	
	  b. In the Object Type list, click Microsoft Clip Gallery, and then click OK.
	
	  If Clip Gallery does not start, skip to the "Check the Dates of the OLE32 DLL
	  Files" section. If Clip Gallery starts, then restart Windows 95, letting it
	  restart normally.
	
	8. Change your Display Adapter to VGA.
	
	  Safe mode bypasses the current real-mode configuration and loads a minimal
	  protected-mode configuration, disabling Windows 95 device drivers and using
	  the standard VGA display adapter.
	
	  If Clip Gallery starts in Safe mode, you may be experiencing a conflict with
	  your display adapter. Use the following test to determine if a conflict
	  exists with your display adapter.
	
	  a. After Windows 95 restarts, click Start, point to Settings, and click
	     Control Panel.
	
	  b. In Control Panel, double-click the Display icon.
	
	  c. Click the Settings Tab, and then click Change Display Type.
	
	  d. Write down your Adapter Type and its Manufacturer so you will be able to
	     properly reset it after this troubleshooting step.
	
	  e. Click Change (to the right of the Adapter Type entry), and then click Show
	     All Devices. Scroll to the top of the Manufacturers list and click
	     Standard Display Types to select Standard Display Adapter(VGA). Click OK,
	     and then click Close in the Change Display Type dialog box. Click Apply in
	     the Display Properties window. Click Yes when you are prompted to restart
	     Windows.
	
	  f. After Windows 95 starts with VGA screen resolution, start WordPad. Click
	     the Start button, point to Programs, point to Accessories, and then click
	     WordPad.
	
	  g. Try starting Clip Gallery again. On the Insert Menu, click Object, and
	     then click Microsoft Clip Gallery. Click OK.
	
	If Clip Gallery starts, you may be experiencing problems with the display driver
	for your video card. Contact the manufacturer of your display card or computer,
	or contact Windows 95 Technical Support or the OEM Manufacturer that
	pre-installed Windows 95 for an updated version of the video driver.
	
	If Clip Gallery still does not start, proceed to the "Check the Dates of the
	OLE32 DLL Files" section.
	
	NOTE: To restore your original video driver settings, follow steps 8a, 8b, and
	8c. In step 8e, select the Adapter Type and Manufacturer that you wrote down
	previously. If your driver isn't on the list, click Show All Devices and scroll
	up the list until you find it. Click OK, and then click Close on the Change
	Display Type dialog box. Click Apply in the Display Properties window. Click Yes
	when you are prompted to restart Windows. Your computer should restart with the
	original driver, and you can adjust the display settings to your original
	resolution and color depth.
	
	For additional information on Safe Mode, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q156126 Troubleshooting Windows 95 Using Safe Mode
	
	
	Check the Dates of the OLE32 DLL Files
	--------------------------------------
	
	Clip Gallery requires several OLE32 files. If any of these files are corrupted or
	missing, Clip Gallery will not function properly. The following table lists the
	OLE32 files initially installed by the three operating systems under which Clip
	Gallery can run.
	
	  OLE32 File        Win95      Win NT 3.51     Win NT 4.0
	  --------------------------------------------------------
	
	  Compobj.dll      7/11/95       5/26/95        8/2/96
	  Ddeml.dll        7/11/95       5/26/95        8/2/96
	  Ole2.dll         7/11/95       5/26/95        8/2/96
	  Ole2conv.dll     7/11/95       5/26/95        8/2/96
	  Ole2disp.dll     7/11/95       5/26/95        8/2/96
	  Ole2nls.dll      7/11/95       5/26/95        8/2/96
	  Ole32.dll        7/11/95       5/26/95        8/2/96
	  Olecli.dll       7/11/95       5/26/95        8/2/96
	  Olecli32.dll     7/11/95       5/26/95        8/2/96
	  Olecnv32.dll     7/11/95       5/26/95        8/2/96
	  Oledlg.dll       7/11/95       5/26/95        8/2/96
	  Olesvr.dll       7/11/95       5/26/95        8/2/96
	  Olesvr32.dll     7/11/95       5/26/95        8/2/96
	  Olethk32.dll     7/11/95       5/26/95        8/2/96
	  Storage.dll      7/11/95       5/26/95        8/2/96
	  Toolhelp.dll     7/11/95       5/26/95        8/2/96
	  Typelib.dll      7/11/95       5/26/95        8/2/96
	
	NOTE: The above dates are for a clean installation of each operating system.
	System updates, service packs, and other component upgrades install files with
	the same names, but with different dates. Refer to the Readme file that
	accompanied the system update, service pack, or upgrade to compare with the
	dates in the table.
	
	If any of the files do not have appropriate dates for your operating system and
	system upgrades, you may have damaged files or an incompatibility because of
	mismatched DLL files.
	
	Follow these steps to replace your OLE32 files:
	
	1. Restore the DLLs from the Sysbckup folder (Windows 95 only).
	
	  Some of the OLE32 files can be restored from the Sysbckup folder. This must be
	  done in MS-DOS mode because Windows may be using some of the files for other
	  operations.
	
	  NOTE: The system backup (Sysbckup) folder is located in the folder in which
	  you installed Windows 95. (Windows NT does not have a Sysbckup folder.)
	
	  a. Click Start, and then click Shut Down. This opens the Shut Down Windows
	     dialog box.
	
	  b. On the Shut Down Windows dialog box, click "Restart the computer in MS-DOS
	     mode?" to restart your computer in MS-DOS mode.
	
	  c. Switch to the Windows\Sysbckup folder and type the following command:
	
	         COPY *.DLL C:\WINDOWS\SYSTEM\*.DLL
	
	     This copies the DLL file in the Windows\Sysbckup folder to the
	     Windows\System folder. This may contain the mismatched DLLs that are
	     causing the problem.
	
	  d. After you copy the files, restart your computer, and let Windows 95 start
	     normally.
	
	  e. Test to see if Clip Gallery starts within WordPad.
	
	     Start WordPad from the Start menu and start Microsoft Clip Gallery from the
	     Insert menu.
	
	     If Clip Gallery does not start, then the replacement files did not fix the
	     problem. You must rename the DLL files and either manually extract the
	     files from your original installation source or reinstall Windows 95.
	
	2. Extract the OLE32 DLL files from your Windows compact disc.
	
	  WARNING: The following procedure involves manually replacing DLLs. If you are
	  not experienced with manual extraction procedures or have an OEM installation
	  of Windows 95, you may want to simply reinstall Windows 95. Incorrectly
	  replacing OLE modules can result in more problems than it resolves. If you
	  are unsure of the following steps, please contact Windows 95 Technical
	  Support or the OEM Manufacturer that pre-installed your operating system.
	
	  Extract the files into the Windows\System folder, replacing every file in the
	  OLE32 file table.
	
	  For additional information about extracting files from the Windows 95 .cab
	  files, please see the following articles in the Microsoft Knowledge Base:
	
	  Q132913 How to Use EXTRACT.EXE to Copy Files from DMF Disks
	
	
	  Q135540 Windows 95 CD-ROM Directory Listing (1 of 5)
	
	  Q135537 Windows 95 CD-ROM Directory Listing (2 of 5)
	
	  Q135538 Windows 95 CD-ROM Directory Listing (3 of 5)
	
	  Q135539 Windows 95 CD-ROM Directory Listing (4 of 5)
	
	  Q135541 Windows 95 CD-ROM Directory Listing (5 of 5)
	
	  Q135542 Windows 95 DMF Floppy Disk Directory Listing (1 of 4)
	
	  Q135545 Windows 95 DMF Floppy Disk Directory Listing (2 of 4)
	
	  Q135544 Windows 95 DMF Floppy Disk Directory Listing (3 of 4)
	
	  Q135543 Windows 95 DMF Floppy Disk Directory Listing (4 of 4)
	
	
	a. After you copy the files, restart your computer, and let Windows 95 start
	  normally.
	
	b. Click Start, point to Programs, point to Accessories, and then click WordPad.
	
	c. On the Insert menu, click Object.
	
	d. In the Object Type list, click Microsoft Clip Gallery, and then click OK.
	
	If Clip Gallery still does not start, then the problem is most likely with the
	operating system. This might require that you reinstall Windows 95 or you may
	have to reformat your hard disk and reinstall all of your programs. At this
	point, Microsoft recommends that you contact Windows Technical Support or the
	OEM Manufacturer that pre-installed Windows on the computer.
	
	Additional query words: 1.0 1.1 3.00 CAG Clipart Gallery 8.00 ppt8 powerpt powerpnt off97 Office msoffice mspub pub4 w_mspub GPF errmsg
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtshoot kbdta 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPublisherSearch kbWord95Search kbZNotKeyword6 kbPowerPt97 kbZNotKeyword2 kbExcel95Search kbExcel97Search kbPowerPt97Search kbPublisher97 kbClipGallerySearch kbZNotKeyword3 kbPowerPt95Search kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch kbWorks400Search
	Version           : :3.0; WINDOWS:97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
