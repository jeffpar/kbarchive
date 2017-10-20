---
layout: page
title: "Q161956: MS BOOKSHELF INTERNET DIRECTORY 1996/97 EDITION Corrections"
permalink: /kb/161/Q161956/
---

## Q161956: MS BOOKSHELF INTERNET DIRECTORY 1996/97 EDITION Corrections

{% raw %}

	Article: Q161956
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Bookshelf Internet Directory, 1996/97 Edition ISBN 1-55615-947-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	related to the Microsoft Press book "Microsoft Bookshelf Internet Directory,
	1996/97 Edition."
	
	The following topics are covered:
	
	- Book sections not present on CD-ROM
	
	- Run-time error 13: "Type mismatch" on startup
	
	- Run-time error 438: "Object does not support this property..."
	
	- Program conflicts with Mastering Visual Basic CD
	
	- Error: "SHARE.EXE Not Loaded"
	
	- Error: "Microsoft Internet Explorer (No Document)"
	
	- Web addresses don't automatically start browser
	
	- CD-ROM: Browse button doesn't work on "locate \MEDIA" error
	
	- Updates for this directory have been discontinued.
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the Correction section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The Comments
	section contains specific information for working around the problem.
	
	Book Sections Not Present on CD-ROM
	-----------------------------------
	
	The information in the following sections of the "Microsoft Bookshelf Internet
	Directory" book is not available on the "Microsoft Bookshelf Internet Directory"
	CD-ROM.
	
	- Agriculture and Gardening
	
	- Internet: Communities, People and Legends
	
	To date these sections have not been included on the Internet Directory updates.
	
	Microsoft Press is researching this issue and will update this report when more
	information becomes available.
	
	Run-time Error 13: "Type mismatch" on Startup
	---------------------------------------------
	
	This program will fail when the Regional Settings in the Control Panel is set to
	anything other than English (United States).
	
	This error relates to a Windows system file called VSVBX.VBX, which is a section
	of code used by many Windows programs. The Internet Directory setup program does
	not install its own version of VSVBX.VBX if there is a newer version already
	present on the system, and some versions of the VSVBX.VBX file are not
	compatible with the Internet Directory.
	
	Installing the older version of VSVBX.VBX manually from the Internet Directory
	CD-ROM is not recommended, because doing so might cause errors in another
	Windows program.
	
	To make sure that the Internet Directory is accessing the proper components, the
	program must be run directly from the CD-ROM.
	
	On Microsoft Windows version 3.0 or 3.1, file sharing and locking is supported by
	a program called Share.exe. This program is loaded in MS-DOS before Windows is
	loaded, allowing Windows to manage file sharing effectively. The Microsoft
	Bookshelf Internet Directory expects this file to be loaded, and fails without
	it.
	
	Windows 95, Windows NT 3.51, and Windows NT 4.0 handle file sharing automatically
	without the need of Share.exe. Therefore this error does not occur on those
	systems.
	
	SYMPTOMS
	========
	
	When you start Microsoft Bookshelf Internet Directory, you might receive the
	following error message:
	
	  Run-time error 13: Type Mismatch
	
	WORKAROUND
	==========
	
	In Windows 95:
	
	1. Click the Start button, then click Settings, and then click Control Panel.
	
	2. Click Regional Settings.
	
	3. In the drop-down box, select English (United States).
	
	4. Click OK.
	
	In Windows 3.1:
	
	1. In the Program Manager, open the Main folder.
	
	2. Double-click Control Panel.
	
	3. Double-click International.
	
	4. In the Country drop-down box, select United States.
	
	5. Click OK.
	
	NOTE: This change affects how time, date, currency, and certain other regional
	items are displayed. This change does not affect the language of Windows.
	
	Run-time Error 438: "Object does not support this property..."
	--------------------------------------------------------------
	
	After installing "Microsoft Bookshelf Internet Directory," you might receive the
	following error message:
	
	  Run-time error 438: Object does not support this property or method.
	
	One way to make sure that the Internet Directory is accessing the proper
	components is to run the program directly from the CD-ROM.
	
	To run the Internet Directory from the CD-ROM, perform the following steps.
	
	1. Insert the Internet Directory CD into your CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. Type "d:\mspid.exe" (without the quotation marks). Replace "d:" with the
	  letter of your CD-ROM drive if necessary.
	
	NOTE: This workaround is not compatible with the Internet Directory downloadable
	updates.
	
	VideoSoft, the creator of VSVBX.VBX, is aware of this incompatibility. Microsoft
	Press is investigating this issue and will post further information when it
	becomes available.
	
	Program Conflicts with Mastering Visual Basic CD
	------------------------------------------------
	
	After installing the CD-ROM program for the "Microsoft Bookshelf Internet
	Directory" on a computer that also has Microsoft Visual Basic 4.0 installed, you
	might not be able to run the Mastering Visual Basic 4.0 CD-ROM. Uninstalling the
	Internet Directory does not correct the problem accessing the Mastering Visual
	Basic CD-ROM.
	
	The problem is caused by the common file Tlist.vbx, which is used by both the
	Microsoft Bookshelf Internet Directory and Mastering Visual Basic 4.0. The
	version installed by the Internet Directory is not compatible with Mastering
	Visual Basic 4.0.
	
	To correct this problem, please follow these steps:
	
	1. Insert the Mastering Visual Basic CD into your CD-ROM drive.
	
	2. Copy D:\Setup\Tlist.vbx to your Mastering Visual Basic executable folder.
	  (Replace D:\ with the drive letter of your CD-ROM if necessary.)
	
	3. Insert the Internet Directory CD into your CD-ROM drive.
	
	4. Copy D:\App\Tlist.vbx to your Internet Directory executable folder. (Replace
	  D:\ with the drive letter of your CD-ROM if necessary.)
	
	5. Delete Tlist.vbx from your Windows\System folder.
	
	Both programs will now function correctly.
	
	Error: "SHARE.EXE Not Loaded"
	-----------------------------
	
	Symptom:
	
	On systems running Microsoft Windows 3.0 or Windows 3.1, running the Microsoft
	Bookshelf Internet Directory sometimes causes the program to fail. The program
	returns the error message:
	
	  Run-time error '3050'
	  Couldn't lock file: SHARE.EXE not loaded
	
	Use the following steps to install Share.exe for Windows 3.x:
	
	1. Find the file Share.exe on your computer.
	
	   - With Windows loaded, click File.
	
	   - Click Search.
	
	   - Type Share.exe into the input box, and press RETURN.
	
	   - You may have several copies, but one is typically located in the folder
	     C:\Dos.
	
	2. Make a backup copy of the file Autoexec.bat.
	
	   - Exit to MS-DOS.
	
	   - Change to the C drive if necessary. Type: C:
	
	   - Then change to the root folder. Type: CD \
	
	   - Type COPY AUTOEXEC.BAT AUTOEXEC.BK1
	
	3. Edit your Autoexec.bat file.
	
	   - Type EDIT AUTOEXEC.BAT
	
	   - Just above the line reading WIN, or at the bottom of the file if WIN is
	     not present, type the following:
	
	  " C:\Dos\Share.exe" (without the quotation marks)
	
	     If necessary, replace Dos with the name of the folder where Share.exe is
	     located.
	
	   - Save the file.
	
	   - Exit EDIT.
	
	4. Reboot your computer. Note any messages regarding Share.exe not loading.
	
	5. Test the Bookshelf Internet Directory.
	
	Error: "Microsoft Internet Explorer (No Document)"
	--------------------------------------------------
	
	The following error might occur when a Web link is clicked in the Internet
	Directory:
	
	  Error: "Microsoft Internet Explorer (No Document)"
	
	This is most likely caused by having a Web browser other than Microsoft Internet
	Explorer set as the Windows default browser.
	
	If your browser is Netscape Navigator 2.0, you may be able to solve the problem
	by first installing Microsoft Internet Explorer 2.0, and then installing
	Netscape as your default browser.
	
	For more detailed troubleshooting information, please read the online help
	troubleshooting section:
	
	1. Start the Internet Directory program.
	
	2. Click the Help menu, and then click Contents.
	
	3. Double-click the Troubleshooting and Product Support help section.
	
	4. Double-click the Troubleshooting topic.
	
	Web Addresses Don't Automatically Start Browser
	-----------------------------------------------
	
	The Internet Directory does not support automatic browser starting for Microsoft
	Internet Explorer version 1.6 for Windows 3.1x. There are other browsers that
	also do not support this feature.
	
	The following information is available in the Internet Directory online help. To
	view this and other troubleshooting information, click the Help menu, then click
	Contents, and then double-click Troubleshooting.
	
	Online Help: Troubleshooting
	----------------------------
	
	My Internet browser won't start automatically.
	
	For Microsoft Bookshelf Internet Directory 1996/97 to start your Internet browser
	and go to an Internet site automatically when you click on the Internet address,
	your supported browser must be properly installed in Windows 95. (For a list of
	supported browsers, see the Supported Browsers section.) In addition, you must
	have access to the Internet via a network connection or an Internet Service
	Provider.
	
	Even if automatic launch does not work with your browser, you can still use
	Microsoft Bookshelf Internet Directory 1996/97 with the browser. Each time you
	click an Internet address in the Microsoft Bookshelf Internet Directory 1996/97,
	the address is copied automatically to the Windows Clipboard, from which you can
	conveniently paste it into the address window of your browser.
	
	If your browser is Netscape 2.0, you may be able to solve the problem by first
	installing Microsoft Internet Explorer 2.0, and then installing Netscape as your
	default browser.
	
	If the Internet address that doesn't work is an e-mail address, verify that you
	have a MAPI-compliant e-mail application installed on your Windows 95 computer.
	
	Supported Browsers
	------------------
	
	The Microsoft Bookshelf Internet Directory 1996/97 supports the following
	Internet browsers:
	
	- Microsoft Internet Explorer 2.0
	
	- Netscape Navigator 2.0
	
	In addition to these supported browsers, you can use Microsoft Bookshelf Internet
	Directory 1996/97 with virtually any Internet browser, such as NCSA Mosaic or
	Spry Mosaic. However, because not all browsers fully register themselves with
	Windows 95, direct launch of Internet addresses may not work with some browsers,
	and is not supported for any browser running on a Windows 3.1 computer. (A
	browser application is "registered" when it provides information about itself to
	Windows 95. Not all browsers provide this information to Windows 95.)
	
	In these situations, Microsoft Bookshelf Internet Directory 1996/97 copies
	Internet addresses to the Windows Clipboard, from which you can paste the
	Internet address into your browser. For more information, see the section, Going
	to an Internet Address.
	
	Microsoft Internet Explorer 2.0 is included on the Microsoft Bookshelf Internet
	Directory 1996/97 CD-ROM; to install it, insert the disc and run Setup.
	
	Microsoft Internet Explorer Beta 1.6 (for Windows 3.1) is included on the
	Microsoft Bookshelf Internet Directory 1996/97 CD-ROM in the \MSIE folder; to
	install it, read the instructions in Readme.txt, which is located on the
	Microsoft Bookshelf Internet Directory 1996/97 CD-ROM.
	
	CD-ROM: Browse button doesn't work on "locate \MEDIA" error
	-----------------------------------------------------------
	
	SUMMARY
	
	If the CD-ROM is missing when you start Internet Explorer, an error message will
	appear. This message will note that the data files cannot be found and ask for
	the location of the \MEDIA directory on the CD-ROM. The input box will offer
	this as a default:
	
	  c:\probra~1\micros~2\intern~1\media
	
	The error message will also offer a Browse button.
	
	MORE INFORMATION
	
	Clicking the browse button will bring up a standard "Open File" dialog box.
	However, selecting the correct directory and clicking OK will have no effect.
	The dialog box will remain as a modal dialog until the user clicks "Cancel."
	
	This error message will continue to appear every time the user attempts to start
	Microsoft Bookshelf Internet Directory, whether or not the CD-ROM disc is in the
	drive.
	
	WORKAROUND
	
	In the input box asking for the location of the \Media directory, type the
	following:
	
	  D:\MEDIA
	
	Replace D:\ with the correct drive letter of the CD-ROM if necessary.
	
	Microsoft Bookshelf Internet Directory will then launch without further error
	messages.
	
	
	Updates for this directory have been discontinued
	-------------------------------------------------
	
	Updates for this directory have been discontinued.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
