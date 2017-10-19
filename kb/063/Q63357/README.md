---
layout: page
title: "Q63357: Debugging NetWare Printing Problems in Windows"
permalink: /kb/063/Q63357/
---

## Q63357: Debugging NetWare Printing Problems in Windows

	Article: Q63357
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To debug printing problems from Microsoft Windows on a Novell NetWare network,
	use the checklist provided in this article.
	
	MORE INFORMATION
	================
	
	1. Do you have a valid SET TEMP statement?
	
	  Windows cannot print correctly unless the DOS TEMP variable is set to a valid
	  directory to which you have Create, Write, and Delete access privileges.
	
	2. Are you using a proper Windows printer configuration?
	
	  Verify that the correct Windows printer driver is installed and that the
	  appropriate port is selected for output.
	
	3. Do you have the correct NetWare shell version?
	
	  Windows 3.0 and 3.0a require IPX.COM and NETx.COM version 3.02a or later.
	
	  Windows 3.1 requires IPX.COM version 3.1 and NETX.COM version 3.26.
	
	  You can obtain the latest versions of these files from NetWare dealers, the
	  Novell LANswer Technical Support group, or from the Novell area on
	  CompuServe.
	
	4. Is the Windows NetWare driver installed?
	
	  Run the Windows SETUP utility icon from Program Manager and check that "Novell
	  NetWare" is shown as the installed network driver. Windows is not able to
	  print correctly on a Novell network if no network driver or an incorrect
	  network driver is installed.
	
	5. Is the workstation printing utility installed?
	
	  Windows does not work properly with NetWare printing utilities that allow one
	  workstation to print to a printer connected to another workstation. For
	  proper Windows operation, the network printer must be connected to a server.
	
	6. Are you using the proper NetWare print configuration?
	
	  Windows requires proper NetWare print console configuration for successful
	  printing on Novell networks. This configuration can be carried out in one of
	  two ways. The best way is for the system administrator to verify that the
	  server Print Console configuration is set correctly by using the supervisor
	  PRINTCON utility.
	
	  In PRINTCON, perform an Edit Print Job Configuration and make sure the
	  following options are set. Options not listed are not relevant to proper
	  Windows printing.
	
	     PRINTCON Option          Setting
	     --------------------------------
	
	     Suppress Form Feed       Yes
	     File Contents            Byte Stream
	     Print Banner             No
	     Auto Endcap              No
	     Enable Timeout           No
	
	  Windows always places a formfeed at the end of its print jobs. Suppress Form
	  Feed should be set to Yes so NetWare does not add an additional formfeed,
	  thus wasting a sheet of paper. Because Windows is printing bitmap graphics in
	  almost all cases, File Contents must be set to Byte Stream to avoid NetWare's
	  automatic expansion of tab characters. Byte values resembling tab characters
	  occur randomly within bitmap graphic output; if these are expanded to spaces,
	  the output will be garbled. Auto Endcap and Enable Timeout should be set to
	  No to avoid NetWare timing out the print job while it is in progress. The
	  Print Banner should be disabled to avoid garbled printing.
	
	  For example, if these options are set to Yes and a Windows application takes
	  too long to spool a portion of a print job in progress, NetWare could
	  time-out the print job in the middle. If you experience fragmented or garbled
	  print jobs, make sure these options are set correctly. If you cannot set
	  these options globally by using the PRINTCON utility, you may specify them on
	  your CAPTURE command line. A sample command line is as follows:
	
	  CAPTURE NB NA TI=0 NFF NT
	
	  In this example, the NB is used to specify that no banner page be printed, the
	  NA (No Automatic endcap) option is the same as setting Auto Endcap to No in
	  PRINTCON. TI=0 (TImeout) is the same as setting Enable Timeout to No. NFF (No
	  Form Feed) is the same as Suppress Form Feed set to Yes in PRINTCON. NT (No
	  Tab expansion) is similar to setting File Contents to Byte Stream.
	
	  If you want to make these changes for individual users rather than for the
	  system as a whole, the proper CAPTURE format may be placed in your login
	  script by using SYSCON.
	
	The Novell products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.11 kbnetwork tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
