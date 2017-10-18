---
layout: page
title: "Q194409: SAMPLE: RESFILE.EXE Stores Any File Type in a Resource File"
permalink: kb/194/Q194409/
---

## Q194409: SAMPLE: RESFILE.EXE Stores Any File Type in a Resource File

	Article: Q194409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbAddIn kbResourceEd kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RESFILE.EXE is a sample project that shows how to store any file type in a
	resource file and retrieve the file for use at run-time.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Resfile.exe
	  (http://download.microsoft.com/download/vb60ent/samp10/1/WIN98/EN-US/Resfile.exe)
	
	Release Date: Oct-19-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Programmers often want to use files with their application, but do not want to
	install these files into the application directory for fear that the user might
	delete or modify them. Examples of this include an RTF or Word file for a
	"Readme" file, GIF and JPG files for images, or MIDI files for sound and data
	files.
	
	One of the ways to distribute these required files is to include them in a
	resource file. The resource file is compiled into the EXE. This makes the
	included files available to the program, but keeps the user from being able to
	modify them.
	
	A resource file can contain any type of data. It can load certain types of data
	directly, such as bitmaps, icons, and strings using LoadResPicture and
	LoadResString. Other types of data must be stored in the resource file as a
	"custom" resource. Custom resources must be retrieved from the resource file
	using the LoadResData function intrinsic to Visual Basic.
	
	Although the Visual Basic Help file says "The data that LoadResData loads from
	the resource file can be up to 64K," this is a limitation for the 16- bit
	versions of Visual Basic. The 32-bit versions of Visual Basic have no problem
	reading larger amounts of data.
	
	To use the custom resource, you can simply use the LoadResData function to
	retrieve the resource into a byte array, then save the byte array to a temporary
	file, use the file, and then delete the temporary file.
	
	The Resfile.exe sample has a reusable module for handling these resource file
	operations. This module has two functions to make the resource file tasks
	easier.
	
	- LoadPictureResource - This function saves a custom resource to disk and then
	  executes the LoadPicture function to return the Picture object. This is
	  useful for including GIF and JPG files in a resource file. These files are
	  considerably smaller than a BMP, thereby making the resulting EXE smaller.
	
	- SaveResItemToDisk - This function simply saves a resource item to disk.
	  Programmers can then deal with the file just as they would with any external
	  file.
	
	NOTE: The Resfile sample project included is heavily commented; you may wish to
	examine the code to gain a better understanding of the operation of these
	functions.
	
	Additional query words: Resfile
	
	======================================================================
	Keywords          : kbfile kbsample kbAddIn kbResourceEd kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
