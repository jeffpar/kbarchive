---
layout: page
title: "Q179548: XADM: How to Update a Client Install Share with 5.0 SP2"
permalink: /kb/179/Q179548/
---

## Q179548: XADM: How to Update a Client Install Share with 5.0 SP2

	Article: Q179548
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The procedures described in this article allow you to update a Microsoft
	Exchange Server 5.0 client installation point with Microsoft Exchange Server
	Service Pack 2 binary files.
	
	This allows new users to run the client Setup once and have all the fixes in
	Service Pack 2 on their workstation. This also allows an existing Microsoft
	Exchange Server 5.0 RTM user to run client Setup just once (instead of twice) to
	update the workstation with all of the Service Pack 2 files.
	
	These procedures are very detailed and require a lot of editing by the system
	administrator. It is easy to make an editing mistake, so take your time and
	double-check your changes. These procedures will work for all client platforms
	and languages. Thorough testing is recommended before making this installation
	point available to your users.
	
	MORE INFORMATION
	================
	
	To update a Microsoft Exchange Server 5.0 Client installation point with
	Microsoft Exchange Client Service Pack 2 binary files:
	
	1. Create a Microsoft Exchange Server 5.0 Client Administration share on your
	  network by using the "setup /a" command. This provides all the binary files
	  in expanded form and eliminates the CAB files. Name the directory Sp2.mod.
	
	2. Run Setup Editor (if you have done so in the past) and do your normal
	  modifications.
	
	3. In a separate directory on your network, copy the contents of the Microsoft
	  Exchange 5.0 SP2 client directory that matches the client you set up in Step
	  1. Name the directory Sp2.org.
	
	4. Copy the Extract.exe and Sp2extrt.bat files from the Support directory of the
	  Service Pack 2 compact disk to the Sp2.org directory. If you have downloaded
	  Service Pack 2 from the Internet, and thus do not have the compact disk,
	  these files can be found in Sp2_50wh.exe.
	
	5. From the Sp2.org directory, run Sp2extrt.bat. This will create an
	  \Sp2.org\Rawsp2 directory and will place all the extracted Service Pack 2
	  binary files there.
	
	6. Using your favorite text editor (do not use Edit.com), open
	  Sp2.mod\Exchng.inf and \Sp2.org\Rawsp2\Exchng.inf.
	
	7. For each line listed under the [Client Files] section in
	  Sp2.org\Rawsp2\Exchng.inf, make the corresponding date, size, and version
	  changes in \Sp2.mod\Exchng.inf. If the file does not exist in
	  Sp2.mod\Exchng.inf, skip it. Do not do a complete line copy; this will break
	  Setup.
	
	  WARNING: Only change the date, the size (if it changes), and the version. Be
	  careful not to delete commas or additional fields.
	
	8. After your modifications are complete, save it to its original location and
	  close the text editor.
	
	9. Replace the .dll files in \Sp2.mod\System with the corresponding .dll files
	  in Sp2.org\Rawsp2.
	
	You are now ready to test your client installation.
	
	NOTE: Extract.exe is a Win16 utility.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
