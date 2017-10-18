---
layout: page
title: "Q131964: XADM: How to Update a Client Install Share with SP4"
permalink: kb/131/Q131964/
---

## Q131964: XADM: How to Update a Client Install Share with SP4

	Article: Q131964
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup exc4sp2 exc4sp3
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following procedures allow you to update a Microsoft Exchange Server 4.0
	Service Pack 2 or Service Pack 3 client installation point with Microsoft
	Exchange Server Service Pack 4 binary files. If you have already updated your
	client installation point with Service Pack 3 binaries, you can use this same
	procedure to update it to Service Pack 4 by following the second set of
	instructions below.
	
	This allows new users to run the client Setup once and have all the fixes in
	Service Pack 4 on their workstation. This also allows an existing Microsoft
	Exchange Server 4.0 RTM user to run client Setup just once (instead of twice) to
	update the workstation with all of the Service Pack 2 and Service Pack 4 binary
	files.
	
	NOTE: Microsoft Exchange Service Pack 4 has cumulative fixes based on Service
	Pack 2. Therefore, all fixes in Service Pack 3 are also included in Service Pack
	4.
	
	These procedures are very detailed and require a lot of editing by the System
	Administrator. It is easy to make an editing mistake, so take your time and
	double-check your changes. These procedures will work for all client platforms
	and languages. Thorough testing is recommended before making this installation
	point available to your users.
	
	MORE INFORMATION
	================
	
	To update a Microsoft Exchange Server 4.0 Service Pack 2 Client installation
	point with Microsoft Exchange Client Service Pack 4 binary files:
	
	1. Create a Microsoft Exchange Server SP2 Client Administration share on your
	  network by using setup /a. This provides all the binary files in expanded
	  form and eliminates the CAB files. Name the directory Sp2.mod.
	
	2. Run Setup Editor (if you have done so in the past) and do your normal
	  modifications.
	
	3. In a separate directory on your network, copy the contents of the Service
	  Pack 4 client directory that matches the client you set up in Step 1. Name
	  the directory Sp4.org.
	
	4. Copy the Extract.exe and Sp4extrt.bat files from the \Support directory of
	  the Service Pack 4 compact disc to the Sp4.org directory.
	
	5. From the Sp4.org directory, run Sp4extrt.bat. This will create an
	  \Sp4.org\Rawsp4 directory and will place all the extracted Service Pack 4
	  binary files there.
	
	6. Using your favorite text editor, open \Sp2.mod\Exchng.inf and
	  \Sp4.org\Rawsp4\Exchng.inf.
	
	7. For each line listed in \Sp4.org\Rawsp4\Exchng.inf, make the corresponding
	  date, size, and version changes in \Sp2.mod\Exchng.inf. If the file doesn't
	  exist in \Sp2.mod\Exchng.inf, skip it. Don't do a complete line copy; this
	  will break Setup.
	
	  VERY IMPORTANT! Only change the date, the size (if it changes), and the
	  version. Be careful not to delete commas or additional fields.
	
	8. After your modifications are complete, save it to its original location and
	  close the text editor.
	
	9. Replace the files in Sp2.mod with the corresponding files in \Sp4.org\Rawsp4.
	
	10. Replace the files in \Sp2.mod\System with the corresponding files in
	  \Sp4.org\Rawsp4. This will be most, but not all, of the remaining Service
	  Pack 4 files. It may be easiest to do this in File Manager with two windows,
	  each sorted by name. To ensure that you are able to see all files, do the
	  following:
	
	  a. In File Manager, click Options on the View menu.
	
	  b. Click Show All Files and then click OK.
	
	  c. Select the corresponding Service Pack 4 files and drag them to the
	     appropriate directory.
	
	You are now ready to test your client installation.
	
	NOTE: Extract.exe is a Win16 utility.
	
	
	To update a Microsoft Exchange Server 4.0 Service Pack 3 Client installation
	point with Microsoft Exchange Client Service Pack 4 binary files:
	
	1. Copy your Service Pack 3 client installation point to a new directory called
	  Sp3.mod.
	
	2. In a separate directory on your network, copy the contents of the SP4 client
	  directory that matches the client installation you copied in step 1. Call the
	  directory Sp4.org.
	
	3. Copy the Extract.exe and Sp4extrt.bat files from the \Support directory of
	  the Service Pack 4 compact disc to the Sp4.org directory.
	
	4. From the Sp4.org directory, run Sp4extrt.bat. This will create an
	  \Sp4.org\Rawsp4 directory and will place all the extracted Service Pack 4
	  binary files there.
	
	5. Using your favorite text editor, open \Sp3.mod\Exchng.inf and
	  \Sp4.org\Rawsp4\Exchng.inf.
	
	6. For each line listed in \Sp4.org\Rawsp4\Exchng.inf, make the corresponding
	  date, size, and version changes in \Sp3.mod\Exchng.inf. If the file doesn't
	  exist in \Sp3.mod\Exchng.inf, skip it. Don't do a complete line copy; this
	  will break Setup.
	
	  VERY IMPORTANT! Only change the date, the size (if it changes), and the
	  version. Be careful not to delete commas or additional fields.
	
	7. After your modifications are complete, save it to its original location and
	  close the text editor.
	
	8. Replace the files in Sp3.mod with the corresponding files in \Sp4.org\Rawsp4.
	
	9. Replace the files in \Sp3.mod\System with the corresponding files in
	  \Sp4.org\Rawsp4. This will be most, but not all, of the remaining Service
	  Pack 4 files. It may be easiest to do this in File Manager with two windows,
	  each sorted by name. To ensure that you are able to see all files, do the
	  following:
	
	  a. In File Manager, click Options on the View menu.
	
	  b. Click Show All Files and then click OK.
	
	  c. Select the corresponding Service Pack 4 files and drag them to the
	     appropriate directory.
	
	You are now ready to test your client installation.
	
	NOTE: Extract.exe is a Win16 utility.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4sp2 exc4sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP2 kbExchange400SP3
	Version           : winnt:4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
