---
layout: page
title: "Q148942: How to Capture Network Traffic with Network Monitor"
permalink: /kb/148/Q148942/
---

## Q148942: How to Capture Network Traffic with Network Monitor

	Article: Q148942
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0,2.1,2.11,2.x,2000,3.1,3.11,3.11a,3.11b,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhowto
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft SNA Server for Windows NT, versions 2.1, 2.11 
	- Microsoft LAN Manager to Windows NT Advanced Server Upgrade 
	- Microsoft Systems Management Server version 1.0 
	- Microsoft LAN Manager, version 2.x 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Internet Information Server version 1.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to provide you with the information needed to
	capture network traffic from a local area network using Microsoft's Network
	Monitor. The text of this article comes directly from the Network Monitor's Help
	file and should be referenced for more detailed instructions.
	
	MORE INFORMATION
	================
	
	Network Monitor is a network diagnostic tool that monitors local area networks
	and provides a graphical display of network statistics. Network administrators
	can use these statistics to perform routine trouble- shooting tasks, such as
	locating a server that is down, or that is receiving a disproportionate number
	of work requests. While collecting information from the network's data stream,
	Network Monitor displays the following types of information:
	
	- The source address of the computer that sent a frame onto the network. (This
	  address is a unique hexadecimal (or base-16) number that identifies that
	  computer on the network.)
	
	- The destination address of the computer that received the frame.
	
	- The protocols used to send the frame.
	
	- The data, or a portion of the message being sent.
	
	The process by which Network Monitor collects this information is called
	capturing. By default, Network Monitor gathers statistics on all the frames it
	detects on the network into a capture buffer, which is a reserved storage area
	in memory. To capture statistics on only a specific subset of frames, you can
	single out these frames by designing a capture filter. When you have finished
	capturing information, you can design a display filter to specify how much of
	the information that you have captured will be displayed in Network Monitor's
	Frame Viewer window.
	
	To use Network Monitor, your computer must have a network card that supports
	promiscuous mode. If you are using Network Monitor on a remote machine, the
	local workstation does not need a network adapter card that supports promiscuous
	mode, but the remote computer does.
	
	To capture across networks, or to preserve local resources, use the Network
	Monitor Agent to capture information using a remote Windows NT computer. When
	you capture remotely, the Network Monitor Agent gathers statistics from a remote
	computer, and then sends these statistics to your local computer, where they are
	displayed in a local Network Monitor window.
	
	Once data has been captured either locally or remotely, the data can be saved to
	a text or a capture file, and can be opened and examined at a later time.
	
	NOTE: The core functionality of Network Monitor, described in Help, is supported
	by Microsoft Product Support Services. Network-dependent tasks, such as
	interpreting data that you capture from your network, are not supported. The
	Network Monitor Agent is supported for Windows NT, but is unsupported on Windows
	3.1 and Windows for Workgroups workstations.
	
	Creating an Address List
	------------------------
	
	To use address pairs in a Capture filter, you should first build an address
	database. Once this database is built, you can use the addresses listed in the
	database to specify address pairs in a capture filter.
	
	To create an address list, follow these steps:
	
	1. From the Capture menu, select Start. Optionally, open a .cap file in the
	  Frame Viewer window.
	
	2. When you have finished capturing, select Stop and View from the Capture menu
	  to display the Frame Viewer window.
	
	3. From the Display menu, select Find All Names. Network Monitor processes the
	  frames, then adds them to the address database.
	
	4. Close the Frame Viewer window, and display the Capture window.
	
	5. From the Capture menu, select Filter to display the Capture filter dialog
	  box.
	
	6. In the Capture Filter dialog box, double-click on the Address Pairs line. Or,
	  choose Address in the Add groupbox.
	
	Network Monitor displays the address database you have created. You can use the
	names in this database to specify address pairs in the Capture filter.
	
	Capturing Data Between Two Computers
	------------------------------------
	
	To monitor traffic between two computers, follow these steps:
	
	1. From the Capture menu, choose Filter to display the Capture Filter dialog
	  box.
	
	2. Double-click on the ANY<->ANY line to display the Address Expression
	  dialog box.
	
	3. In the left window of the Address Expression dialog box, select the address
	  of a computer.
	
	4. In the right window of the Address Expression dialog box, select the address
	  of a computer.
	
	When you have done this, choose the Next button at the top of this window for
	more instructions.
	
	1. In the Direction window, of the dialog box, choose one of the symbols:
	
	   - Choose the <--> symbol to monitor the traffic that passes in either
	     direction between the addresses that you have selected.
	
	   - Choose the --> symbol to monitor only the traffic that passes from the
	     address selected in the left window to the address selected in the right
	     window.
	
	2. Choose OK.
	
	3. In the Capture Filter dialog box, choose OK.
	
	4. From the Capture menu, choose Start.
	
	Saving Captured Data
	--------------------
	
	Use the Save As command to save capture statistics to a capture file or to save
	changes to capture files that you have modified. Later, to view frames saved to
	file, you can open this file and display the statistics in Network Monitor's
	Frame Viewer window.
	
	To save the captured frames to a capture file or text file:
	
	1. Do one of the following:
	
	   - On the Toolbar, click the File Save button.
	
	  -or-
	
	   - From the File menu, choose Save As.
	
	2. Do one the following:
	
	   - To save the file to the current drive and directory, in the File Name box,
	     specify a file name and an extension. If you are saving a file that you
	     have modified, you cannot save it under its original name in the same
	     directory.
	
	   - To save the file to a network share to which you are not connected, choose
	     the Network button, and then use the Connect Network Drive dialog box to
	     establish the connection.
	
	   - To save the file to a different drive or directory, do the following:
	
	     a. In the Drives box, select a new drive.
	
	     b. In the Directories box, select a new directory.
	
	     c. Type the file name.
	
	3. To save only those frame statistics that meet the specifications of the
	  current display filter, choose Filtered.
	
	  This option is available only if you are saving data from the Frame Viewer
	  window.
	
	4. To save a particular range of frames, type the beginning and ending frame
	  numbers in the From and To boxes.
	
	5. Choose OK.
	
	NOTE: When a range of frames is saved to a capture file, the numbers associated
	with the frames are changed; in a capture file, frame numbers always begin with
	1, regardless of the number associated with the original frame. Similarly, if
	you apply a display filter, and then save the filtered frames, the frame numbers
	in the capture file begin with 1. If, however, you use the Print to File option
	in the Print dialog box, the original frame numbers associated with the frames
	are preserved.
	
	
	Tracing in a WAN Environment
	----------------------------
	
	Sometimes, you may be asked to make a capture of network traffic between two
	specific computers that are separated by one or more routers. In these cases,
	the support professional may want to analyze all network traffic between the
	first computer and its nearest router, and all network traffic between the
	second computer and its nearest router. Most of the time, this is done to check
	whether or not network packets are being lost or corrupted somewhere between the
	routers. To make these traces consistent and to be able to read these traces
	simultaneously, the system clocks must be synchronized between the two computers
	prior to making the trace. Use the following steps to synchronize time between
	two computers:
	
	1. Choose the computer against which to synchronize the time.
	
	2. From the other computer, type the command
	
	  "net time \\<ComputerName> /set /yes" (without the quotation marks)
	
	  where <ComputerName> is the name of the computer from step 1.
	
	3. Verify the computers have the same time by typing "TIME" (without the
	  quotation marks) at each one.
	
	4. Proceed with the trace.
	
	Finding Media Access Control Addresses
	--------------------------------------
	
	If the computer to be monitored is running:
	
	- An MS-DOS-based network client, run MSD at that computer.
	
	- Windows for Workgroups 3.11 (running TCP/IP), type "IPCONFIG /ALL" (without
	  the quotation marks) from the command line.
	
	- Windows 95, run WINIPCFG from the command line at the local workstation.
	
	- MacOS, Open Appletalk Control Panel. Select User Mode from Edit Menu, change
	  mode to Advanced. Appletalk Control Panel now reveals Info button. Click this
	  button to obtain the MAC address
	
	- Windows NT, at the local console, use one of these options:
	
	   - NET CONFIG SERVER from the command line
	
	   - IPCONFIG /ALL from the command line
	
	   - IPXROUTE config from the command line
	
	   - arp -a from the command line
	
	   - Getmac.exe from the Windows NT Resource Kit
	
	   - WinMSD
	
	- Windows NT, remotely, run Getmac.exe from the Windows NT Resource Kit
	
	Additional query words: 1.00 3.50 3.51 4.00 netmon network monitor trace
	
	======================================================================
	Keywords          : kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT351search kbWinNTW350 kbWinNTW351 kbwin2000AdvServ kbwin2000DataServ kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Pro kbWinNTS351search kbWinNTS310search kbSMSSearch kbiisSearch kbAudDeveloper kbWin95search kbWin98search kbWinNT310Search kbWinNTW310Search kbSNAServSearch kbLanManSearch kbiis100 kbTCPIPSearch kbWFWSearch kbWinAdvServSearch kbWinDataServSearch kbZNotKeyword3 kbWFW311 kbWin98 kbLanMan200xSearch kbSMS100 kbSNAServ210NT kbSNAServ211NT kbWinNTW400 kbWinNT350search kbWinNT400search kbWinNTW350search kbWinNTW351search kbwin2000AdvServSearch kbwin2000DataServSearch kbWinNTS400 kbWinNTS350 kbwin2000Search kbwin2000ProSearch kbWinNTS350search kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :1.0,2.1,2.11,2.x,2000,3.1,3.11,3.11a,3.11b,3.5,3.51,4.0
	
	=============================================================================
	
