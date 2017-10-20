---
layout: page
title: "Q89082: Using Sitka TOPS with Windows"
permalink: /kb/089/Q89082/
---

## Q89082: Using Sitka TOPS with Windows

{% raw %}

	Article: Q89082
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sitka TOPS is not a supported network by Microsoft Windows; however, it may be
	possible to run Windows on the Sitka TOPS network. This article discusses the
	following:
	
	- Setup issues for Sitka TOPS with Windows
	
	- Software issues when running Sitka TOPS with Windows
	
	- Hardware issues when running Sitka TOPS with Windows
	
	SETUP ISSUES FOR SITKA TOPS WITH WINDOWS
	----------------------------------------
	
	On a Sitka TOPS network, programs cannot be executed from the server. Therefore,
	it is not possible to perform a network installation of Windows 3.0 by running
	SETUP /N, or Windows 3.1 by running SETUP /A and SETUP /N.
	
	Workaround
	----------
	
	Set up Windows on the local hard drive.
	
	SOFTWARE ISSUES WHEN RUNNING SITKA TOPS WITH WINDOWS
	----------------------------------------------------
	
	Network Connections
	-------------------
	
	Any network connections (file servers, print servers, or network devices)
	established before starting Windows are not recognized from within Windows
	version 3.0, 3.0a, or 3.1. In general, those connections are available if you
	exit Windows. You should always load Sitka NetPrint before starting Windows. For
	more information on this limitation, contact Sitka TOPS technical support.
	
	Network Printing
	----------------
	
	Sitka does NOT recommend that you configure TOPS/DOS as a file server or print
	server when using TOPS/DOS in the Windows 3.0 environment. Configure TOPS/DOS as
	a Network Printer Client, Remote Printer Client or File Client only. You must
	edit the TOPS.DAT file to increase the "Max number of open files" setting
	(listed under the File Client parameters) to at least 20. If you receive an
	error message indicating that your application "can't find a .TMP file, insert
	disk in drive A," try setting the MS-DOS SET TEMP variable in the AUTOEXEC.BAT
	file to the remote drive letter.
	
	Loading TOPS/DOS or NetPrint in conventional memory and Windows in standard mode
	should work in most cases. You will not be able to run TOPS/DOS in extended
	memory while Windows is running in 386 enhanced mode. The MS-DOS extender
	program that TOPS/DOS 3.0 uses for extended memory is not compatible with the
	Windows.
	
	For more information about printing on the Sitka TOPS network, query on the
	following words in the Microsoft Knowledge Base:
	
	  UNIX and CTRLD and TOPS
	
	HARDWARE ISSUES WHEN RUNNING SITKA TOPS WITH WINDOWS
	----------------------------------------------------
	
	For the best results, use a TOPS-supported Ethernet card. With Windows in
	enhanced mode, and to a lesser extent in standard mode, a TOPS FlashCard is not
	serviced often enough to maintain network connections. The operation of the TOPS
	FlashCard and driver is dependent upon standard servicing of hardware
	interrupts. If you want to try using a FlashCard, make sure that you configure
	the card and driver for DMA=NONE and BOARDINT=3. Also, be advised that network
	activity may only work intermittently.
	
	MORE INFORMATION
	================
	
	For more information about Sitka TOPS, contact Sitka.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 stika tops daystar appletalk 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
