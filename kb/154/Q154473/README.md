---
layout: page
title: "Q154473: XCLN: Distributing Third-Party OCXs &amp; VBXs with Eform .cfg File"
permalink: kb/154/Q154473/
---

## Q154473: XCLN: Distributing Third-Party OCXs &amp; VBXs with Eform .cfg File

	Article: Q154473
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you add a custom control to a form that is not included with Visual Basic
	4.0, this file has to be manually copied to the client computer. As stated in
	the "Application Designer's Guide" on page 302, you can distribute third-party
	.ocx and .vbx files by using Microsoft Systems Management Server or other
	network management tools. You can also accomplish this by adding the custom .ocx
	or .vbx file to the .cfg file of the Eform.
	
	MORE INFORMATION
	================
	
	To distribute third-party .ocx and .vbx files, make an entry in the .cfg file as
	follows:
	
	1. Open the EForms's .CFG file in Notepad.
	
	2. If you want this control to be copied for all platforms, add the entry listed
	  below to the [Platform.Platform1] section and use the LinkTo= entry to link
	  all the other platforms to the first platform. Add the following entry to the
	  platform section:
	
	     File#= <CustomControlFileName>.OCX
	
	  The file number is based on how many other File entries are present.
	
	3. Make sure that the .ocx or the .vbx file that is referenced in the File= line
	  is present in the .VB directory of the EForm (Eform.vb). If it is not
	  present, you will receive an error when trying to install the Eform using the
	  .cfg file.
	
	4. Save the EForm's .cfg file.
	
	5. Install the EForm from the client using the EForm's .cfg file.
	
	When the user installs the EForm, the files listed on the File= lines will also
	be copied to the user's machine. These files will be copied to the <Windows
	Directory>\Forms directory, along with the form executable files.
	
	This should be fine for most executable files, but if a custom control needs its
	files in the System subdirectory, they will have to be manually copied to the
	system directory.
	
	This is an example:
	
	[Platforms]
	Platform1=Platform1
	Platform2=Platform2
	Platform3=Platform3
	Platform4=Platform4
	Platform5=Platform5
	Platform6=Platform6
	
	[Platform.Platform1]
	CPU=ix86
	OSVersion=Win3.1
	Registry1=LocalServer=%d\!4!J8N&-.EXE
	File1=!4!J8N&-.EXE
	File2=<CustomControlFileName>.OCX or .VBX  <- This is the Control that is
	to be copied to the <Windows Directory>\Forms directory.
	
	[Platform.Platform2]
	CPU=ix386
	OSVersion=WinNT3.5
	Registry1=LocalServer=%d\!4!J8N&-.EXE
	LinkTo=Platform1  <- With this entry, you do not have the files entries to
	every platform configuration.
	
	NOTE: These FILE= references can also be used for any other file that may need to
	be copied with the EForm executable files. For instance, any .ini files or any
	other supporting files can be added in this manner.
	
	REFERENCES
	==========
	
	For additional Information about the EForm Configuration File, please refer to
	Chapter 9, pages 297-302 and Appendix B, pages 363-371 of the Application
	Designer's Guide.
	
	Additional query words: forms E-form electronic
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
