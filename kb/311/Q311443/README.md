---
layout: page
title: "Q311443: XADM: Using Findbin.exe to Find Viruses in the MTA"
permalink: /kb/311/Q311443/
---

## Q311443: XADM: Using Findbin.exe to Find Viruses in the MTA

	Article: Q311443
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Findbin.exe program to find viruses in the
	message transfer agent (MTA).
	
	MORE INFORMATION
	================
	
	You can use Findbin.exe to crawl Exchange Server message transfer agent (MTA)
	.dat files. Findbin.exe is primarily used to extract messages that may contain a
	virus.
	
	In most cases, a batch file is created for the most common types of e-mail virus
	(such as ExplorerZipWorm, ILOVEYOU, or Melissa). If a batch file is not created
	for a virus, Findbin.exe requires the following syntax (where <hex_string>
	is the name of the attachment that the virus uses converted to hexadecimal,
	<files> are the files that you want to look for, and <move_folder>
	is the folder that you want to move the files to):
	
	  findbin.exe [<hex_string>] [<files>] [<move_folder>]
	
	
	For example, if the virus always uses an attachment that is named Badvirus.vbs,
	convert the name Badvirus.vbs to hexadecimal to use as the <hex_string>.
	Badvirus.vbs is 62616476697275732E766273 in hexadecimal. The files that you want
	to look for in <files> are usually "db*.dat" (without the quotation
	marks), which are the MTA .dat files. For <move_folder>, choose a
	subfolder of the Mtadata folder that you want to move the files to, such as the
	Virus folder. Therefore, the command line to find Badvirus.vbs in your MTA .dat
	files and move those files to the Virus subfolder is the following:
	
	  findbin.exe 62616476697275732E766273 db*.dat VIRUS
	
	Cleaning Up a Worm Virus Attack from the Mtadata Folder
	-------------------------------------------------------
	
	1. Identify your MTA's database folder. Inspect the server's registry for the
	  MTA database path value in the following location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters\
	
	2. Copy Findbin.exe to the Mtadata folder that you identified in step 1.
	
	3. Stop the MTA and any dependent services.
	
	4. Create a subfolder of the Mtadata folder named Virus.
	
	5. From an MS-DOS prompt or a command prompt window, run Findbin with the
	  correct syntax. It may take some time to process all of the files. When the
	  cursor returns to the MS-DOS prompt window, the files have all been
	  processed. Any files that contain the string that you specified are moved to
	  the Virus folder, and you can safely delete those files at your discretion.
	
	6. Run Mtacheck. If you do not encounter any problems, skip to step 8. If you do
	  encounter problems when you run Mtacheck, proceed to step 7.
	
	7. If you encounter any problems when you run Mtacheck, copy the files from
	  Db000002.dat through Db000026.dat from the
	  Server\Setup\<platform>\Bootenv folder of your Exchange Server CD-ROM
	  to the Mtadata folder that you identified in step 1. After you copy the
	  files, you need to remove the Read Only attribute from the copied files or
	  you will not be able to successfully run Mtacheck or start the MTA.
	
	  IMPORTANT: Do not overwrite the Db000001.dat file.
	
	8. Restart the MTA.
	
	9. Repeat steps 1 through 7 again if you encounter another significant backlog
	  on the MTA because of virus mail.
	
	
	Additional query words: VIRUS FINDBIN MTA MTADATA
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
