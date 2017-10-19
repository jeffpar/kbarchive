---
layout: page
title: "Q161468: XCLN: Troubleshooting Client Memory Issues on Windows 3.x"
permalink: /kb/161/Q161468/
---

## Q161468: XCLN: Troubleshooting Client Memory Issues on Windows 3.x

	Article: Q161468
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbusage
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 16-bit Microsoft Exchange Windows 3.x client (the 16-bit Microsoft Exchange
	client) is the client that is installed for users running Windows 3.1 or Windows
	for Workgroups version 3.11 operating systems.
	
	Memory Issues with the 16-bit Client: The most common symptom of low memory
	conditions on a 16-bit client is that the Microsoft Exchange client starts, but
	no other Windows application runs as long as the Microsoft Exchange client is
	running. This issue is directly related to amount of available memory below 640
	KB (conventional memory). If you encounter a situation in which there is not
	enough memory below 640 KB in the Windows system virtual machine to create a
	task database (TDB), you may receive "Out of memory" and "Insufficient memory"
	errors in the Microsoft Windows 3.1x and Windows for Workgroups 3.1x operating
	systems.
	
	Low memory errors are more prevalent on computers running Windows 3.x using
	IPX/SPX. Conventional memory is even more restricted on computers using Token
	Ring network cards. Computers running TCP/IP or NetBEUI have much lower
	conventional memory requirements. In most cases, these requirements can be
	eliminated by optimizing the configuration and following the steps in the
	Troubleshooting section below.
	
	MORE INFORMATION
	================
	
	Troubleshooting 16-Bit Memory:
	
	The following is a list of steps that you can use to help reduce "Out of memory"
	errors when starting the Microsoft Exchange client.
	
	1. Optimize conventional memory as much as possible. If you have MS-DOS version
	  6.0 or 6.2, use MemMaker to optimize conventional memory.
	
	2. Change the order in which your programs or drivers load. This may alter where
	  the fixed code gets located, and minimize memory fragmentation.
	
	3. Disable any applications that start automatically when you start Windows
	  (check the Win.ini file Load= and Run= lines and the Startup group).
	
	4. Run Windows Setup and change to standard Windows drivers (for example, a
	  standard VGA video driver and no mouse).
	
	5. Use the Program Manager (Progman.exe) as your Windows shell.
	
	6. Remove any third-party Windows drivers or virtual device drivers (VxDs).
	
	7. On computers running Windows for Workgroups, click to clear the check from
	  the option to use Network DDE (this option is found in the Network Control
	  Panel under Start Up). Doing this saves 60 KB of conventional memory.
	
	8. Configure the computer to use either TCP/IP or NetBEUI.
	
	9. Test a single computer using the Memvalet utility.
	
	Memory Valet:
	
	If the computer's conventional memory has been fully optimized and the 16-bit
	client still generates "Out of memory" errors, try to use a utility that forces
	DLLs to load in upper memory, such as Memvalet.
	
	NOTE: Memvalet has not been specifically tested with the Microsoft Exchange
	client, and is an unsupported utility. This utility should be used only after
	normal troubleshooting steps have failed. You can find this utility at the
	following address:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-unsup-ed/Memval.zip
	
	How Memory Valet Works:
	
	A TDB is required for each Windows-based application that is loaded. The TDB
	requires 512 bytes of fixed, contiguous memory, and it must be below 640 KB
	(that is, in the low-memory area). If the Windows loader cannot find the memory
	for a TDB below 640 KB, it does not try to find the memory above 640 KB;
	instead, it fails and returns an "Out of memory" error.
	
	When Windows starts, Memory Valet allocates a block of memory below 640 KB and
	"stripes" it with alternating 512-byte and 32-byte allocations. The 512- byte
	allocations are free, contiguous spaces that are available for use by
	applications. As new non-TBD requests for fixed memory (which the Windows memory
	manager allocates to the lowest address space possible) begin to fill the lower
	memory spaces, Memory Valet forces them into higher address spaces, thus
	reserving the lowest memory slots for new TBDs. An alternative to Memory Valet
	is a utility from Gamma Research Inc. that is similar to Memvalet called
	Moremem. Please see http://www.moremem.com for more information.
	
	Moremem is distributed by Gamma Research Inc., a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: exclnfaqold
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
