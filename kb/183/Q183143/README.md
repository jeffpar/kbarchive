---
layout: page
title: "Q183143: ODE97: Run-Time Application Changes Windows File Associations"
permalink: /kb/183/Q183143/
---

## Q183143: ODE97: Run-Time Application Changes Windows File Associations

	Article: Q183143
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0,97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	Every time you start Microsoft Access 97, the automatic registration feature
	registers Msaccess.exe, the supporting Microsoft Access .dll files, the wizards,
	and the file associations of .mdb and .mda files. This registration process
	occurs regardless of whether you are running the full version of Microsoft
	Access 97 or the run-time version.
	
	Installing a Microsoft Access 97 run-time application on a computer that is
	already running Microsoft Access 7.0 associates the .mdb files, the .mda files,
	and the wizards with the Microsoft Access 97 run-time executable file. After you
	have started the run-time application at least once, double-clicking an .mdb
	file results in the operating system attempting to open that file with the
	run-time executable instead of with Microsoft Access 7.0.
	
	This article describes two methods to force re-registration of Microsoft Access
	7.0 so that files with Microsoft Access file name extensions, such as .mdb
	files, are associated with the Microsoft Access 7.0 executable file after you
	have installed a Microsoft Access 97 run-time application.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains a sample procedure that makes changes to the
	Windows 95 registry. Before you modify the registry, make sure you understand
	how to restore it if a problem occurs. For information about how to do this,
	view the "Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	File associations are stored in the Windows registry. You can use one of the
	following methods to change the file associations in the Windows registry.
	
	Method 1: Manual Re-Registration
	--------------------------------
	
	1. Insert the Microsoft Access for Windows 95 Disk 1 or the Microsoft Office
	  Professional for Windows 95 CD-ROM in the appropriate drive.
	
	2. In Microsoft Windows 95 or Windows NT version 4.0, click the Start button on
	  the taskbar, and then click Run.
	
	  In Microsoft Windows NT 3.51, in Program Manager or File Manager, click Run on
	  the File menu.
	
	3. Type a command to run the Setup program with the /y switch, for example
	
	  <Drive>:\setup /y
	
	  where <Drive> is the drive letter for your disk or CD-ROM.
	
	4. In the Installation Maintenance dialog box, click Reinstall.
	
	This may not be the best method if you use the Microsoft Access 97 run-time
	application regularly, because you must reset the file associations every time
	you start the run-time application.
	
	Method 2: Changing File Associations in Code
	--------------------------------------------
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	MSACCREG.DLL is a file that is installed on your computer by Microsoft Access
	7.0. If you accepted the default folders during installation, the file is
	located in the folder C:\MSOffice\Access\MSACCREG.DLL. When you use Regsvr32.exe
	to register this .dll file, all files with Microsoft Access file name extensions
	are associated with the Microsoft Access 7.0 executable file. If Regsvr32.exe
	does not already exist on your hard drive, please see the following article in
	the Microsoft Knowledge Base for information about obtaining a copy of the
	program:
	
	  Q161983 ACC: Regsv32a.exe Available in Download Center
	
	You can use a Visual Basic for Applications procedure to call Regsvr32.exe and
	register the MSACCREG.DLL file every time you open the Microsoft Access 97
	run-time application. This forces the Microsoft Access file name extensions to
	be associated in the Windows registry with the Microsoft Access 7.0 executable
	file.
	
	The following sample procedure is designed to run in the Open event of a startup
	form. Please note that you may need to insert a loop containing a DoEvents
	statement after the line of code that contains the Sendkeys statement; the
	purpose of this loop is to delay execution of the Sendkeys statement. Whether or
	not you need to implement such a loop depends on the speed of your computer.
	
	Paste or type the following procedure into the Open event of the startup form in
	your Microsoft Access 97 run-time application.
	
	NOTE: This code generates an error if Microsoft Access 7.0 is not installed, or
	if the file MSACCREG.DLL is not located in the specified folder.
	
	  Private Sub Form_Open(Cancel as Integer)
	  Dim ReReg
	
	        ' A message box appears after you run Regsvr32.exe.
	        ' The SendKeys statement closes this message box
	        ' box by sending it an ENTER key.
	
	        SendKeys "{enter}"
	
	        ' Use the Shell function to run Regsvr32.exe and re-register
	        ' the .dll. The pathname argument here assumes that
	        ' MSACCREG.DLL is located in the folder C:\Access95.
	
	        ReReg = Shell("Regsvr32.exe C:\Access95\Msaccreg.dll")
	
	  End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: kbmacro vba run time runtime
	
	======================================================================
	Keywords          : kbdta kbdtacode 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbAccess95Search kbOffice97 kbZNotKeyword3 kbAccess700 kbOffice97DevSearch
	Version           : WINDOWS:7.0,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
