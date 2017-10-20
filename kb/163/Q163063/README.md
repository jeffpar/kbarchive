---
layout: page
title: "Q163063: ODE97: Files in Compressed Setup Must Have 3-Character Extension"
permalink: /kb/163/Q163063/
---

## Q163063: ODE97: Files in Compressed Setup Must Have 3-Character Extension

{% raw %}

	Article: Q163063
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you run the Setup program for your custom application, you may receive the
	following error message
	
	  Setup could not open the file:
	  <Path and File name>
	
	CAUSE
	=====
	
	This error occurs when you run Setup from a compressed setup image that includes
	a file without a 3-character file extension. The 1.44-MB Disks and Compressed
	Network or CD Setup options in the Setup Wizard both create compressed setup
	files.
	
	RESOLUTION
	==========
	
	Make sure all file names you include with your custom application have a
	3-character extension if you plan to create setup images using the 1.44-MB Disks
	or Compressed Network or CD Setup options on the "Where do you want the Setup
	Wizard to copy the files" screen of the Setup Wizard.
	
	Note that if you click the Network or CD Setup option, the setup files are not
	compressed, and the 3-character extensions are not required.
	
	MORE INFORMATION
	================
	
	The Microsoft Office 97 Developer Edition Tools Help topic "Avoiding or Solving
	the Most Common Problems Encountered When Using the Setup Wizard states:
	
	  If you create disk images for your application in compressed format (you
	  select 1.44-MD Disks or Compressed Network or CD Setup on the Specify
	  Disk Image Options page in the Setup Wizard), you must either use full
	  three-letter filename extensions (for example, MyApp.mdb) or use no
	  extension (for example, Readme) for any files you specify for your
	  application."
	
	This is incorrect because file names with no extension cause an error when you
	run your custom Setup program.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Notepad or another text editor to create a text file called Readme. The
	  file can contain any text.
	
	2. Start the Microsoft ODE Tools Setup Wizard.
	
	3. On the opening screen of the Setup Wizard, click "Create a new set of setup
	  options for my application's custom Setup program."
	
	4. On the "Add the Files" screen of the Setup Wizard, click the Add button, and
	  then add the Readme file that you created in step 1. Click to select the "Set
	  as Application's Main File" check box, and then click Next.
	
	5. On the "Add the Shortcuts" screen of the Setup Wizard, click the Add button.
	  Type TestFilename in the Description box, and then click Next.
	
	6. Click Next until you see the "Where do you want the Setup Wizard to copy the
	  files" screen of the Setup Wizard. Click 1.44-MB Disks and select a folder
	  where you want to store the disk images. Click Finish.
	
	7. When prompted if you want to save the current Setup template, click No. The
	  Setup Wizard creates the setup image.
	
	8. After the Setup Wizard creates the 1.44-MB Disk images, run Setup.exe from
	  the Disk1 folder on your hard drive. Note that you receive the following
	  error message before Setup is finished:
	
	  Setup could not open the file:
	  <Pathname>\README
	
	  Click Abort to quit Setup before it is finished.
	
	REFERENCES
	==========
	
	For more information about how to prevent common mistakes using the Setup
	Wizard, search the Help Index for "avoiding problems in Setup Wizard."
	
	Additional query words: ADT letter three
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
