---
layout: page
title: "Q101755: PC Win: Recovering PAB from Exported Folder"
permalink: /kb/101/Q101755/
---

## Q101755: PC Win: Recovering PAB from Exported Folder

{% raw %}

	Article: Q101755
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can recover your Personal Address Book (PAB) from an exported MMF file in
	versions 3.0b and 3.2 of Microsoft Mail for Windows.
	
	If you exported a folder by choosing Export Folder from the File menu, you can
	recover the messages and folders, as well as the PAB, from the exported MMF
	file. Recovering the PAB requires a different procedure than the Import Folders
	procedure; you must exchange the MMF that contains the desired PAB for the MMF
	that is in use.
	
	For this example, assume the exported MMF file is named EXPORT.MMF, the new MMF
	file that is created when you start Mail for Windows is named NEW.MMF, and the
	MMF that is in use as the current MMF is named MSMAIL.MMF. To recover the PAB,
	do the following:
	
	1. Move the current MMF file to the local hard drive by choosing Options from
	  the Mail menu, then click the gray Server button. A dialog box will open that
	  allows you to enter a path and filename for the relocation of the MMF file.
	  Use the name MSMAIL.MMF. Choose the Local option button and then choose OK.
	
	2. Save the current MMF file's messages and folders. From the File menu, choose
	  Export Folders. Export all of the folders to a file named TEMP.MMF, then Exit
	  Mail.
	
	3. Rename the current MMF file, which is located in the directory specified in
	  step 1, from MSMAIL.MMF to any unique name.
	
	4. Rename the EXPORT.MMF file to MSMAIL.MMF (the name used to move the MMF to
	  your local hard drive). This new MSMAIL.MMF contains the old messages and the
	  old PAB.
	
	5. Restart the Mail program. As the program starts, it will display a dialog box
	  stating that the MMF file it found is a backup MMF file and will ask if you
	  want to make the file the primary MMF. Choose Yes.
	
	6. Import the new folders and messages from the TEMP.MMF file. From the File
	  menu, choose Import Folders. In the Import Folders dialog box, type TEMP.MMF.
	  Mail will now import all the messages and folders.
	
	The PAB will be restored automatically when the folders are imported. You can now
	restore the MMF back to the server.
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	

{% endraw %}
