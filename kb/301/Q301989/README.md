---
layout: page
title: "Q301989: HOW TO: Capture WAN Traffic with Network Monitor in Windows"
permalink: /kb/301/Q301989/
---

## Q301989: HOW TO: Capture WAN Traffic with Network Monitor in Windows

	Article: Q301989
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Creating an Address List
	- Preparing to Capture Data
	
	   - To Select the Correct Interface
	- To Set the Buffer Size
	
	- Capturing Data Between Two Computers
	
	   - Selecting Pairs of Pomputer Addresses
	- Monitoring Data Traffic
	
	- Saving Captured Data
	- Capturing Network Traffic
	
	SUMMARY
	=======
	
	This step-by-step article describes how to capture Wide Area Network (WAN)
	traffic with Network Monitor.
	
	While collecting information from the network's data stream, Network Monitor
	displays the following types of information:
	
	- The source address of the computer that sent a frame onto the network. (This
	  address is a unique hexadecimal (or base-16) number that identifies that
	  computer on the network.)
	
	- The destination address of the computer that received the frame.
	
	- The protocols used to send the frame.
	
	- The data or a portion of the message being sent.
	
	Requirements
	------------
	
	The following item describe the recommended hardware you will need.
	
	- Network adapter that supports "promiscuous" mode
	
	Creating an Address List
	------------------------
	
	To use address pairs in a Capture filter, first build an address database. To
	create an address list:
	
	1. On the Capture menu, click Start. Open a .capture file in the Frame Viewer
	  window.
	
	2. When you have finished capturing, click Stop, and then click View on the
	  Capture menu.
	
	3. In the Frame Viewer window, on the Display menu, click Find All Names.
	  Network Monitor processes the frames, and then adds them to the address
	  database.
	
	4. Close the Frame Viewer window, and then open the Capture window.
	
	5. On the Capture menu, click Filter.
	
	6. In the Capture Filter dialog box, double-click the Address Pairs line, or,
	  you can click Address in the Add group dialog box. Network Monitor displays
	  the address database that you have created. You can use the names in this
	  database to specify address pairs in the Capture filter. If you are creating
	  address entries for remote computers, use the IP or IPX address of the remote
	  computer and not the media access control address. Media access control
	  addresses are only used on local subnets, and are not passed from subnet to
	  subnet in a routed environment.
	
	Preparing to Capture Data
	-------------------------
	
	Before capturing data, it is necessary to select the correct interface and, if
	necessary, to set the buffer size for the capture.
	
	To Select the Correct Interface:
	
	1. On the Capture menu, click Networks.
	
	2. In the Networks dialog box, select the appropriate interface. If you want to
	  capture data on a network adapter, select the interface that corresponds to
	  the network adapter that you want to capture data on; if you want to capture
	  data across a remote access connection, select the interface that indicates
	  it is a remote access interface in the properties listed in the details pane.
	  If the appropriate media access control address is not known, you can find
	  this by typing the following command at a command prompt:
	
	  ipconfig /all
	
	To Set the Buffer Size:
	
	1. On the Capture menu, click Buffer Settings.
	
	2. Select an appropriate buffer size. By default, Network Monitor sets a 1MB
	  buffer; in many cases, this may be too small. Select a buffer size that is
	  large enough to gather all needed data, but small enough to not be
	  unmanageable. Large capture files will be more difficult to filter and view.
	
	Capturing Data Between Two Computers
	------------------------------------
	
	After creating an address book and preparing to capture data, you can use the
	addresses listed in the database to specify address pairs in a Capture filter
	and monitor data traffic.
	
	Selecting Pairs of Pomputer Addresses:
	
	To select a pair of computer addresses:
	
	1. On the Capture menu, click Filter.
	
	2. In the Capture Filter dialog box, double-click ANY<->ANY.
	
	3. In the left pane of the Address Expression dialog box, select the address of
	  a computer.
	
	4. In the right pane of the Address Expression dialog box, select the address of
	  a computer.
	
	5. Click Next for more instructions.
	
	Monitoring Data Traffic:
	
	To monitor data traffic:
	
	1. In the Address Expression dialog box, in the Direction pane, do one of the
	  following:
	
	   - Click the <--> symbol to monitor the traffic that passes in either
	     direction between the addresses that you selected.
	
	   - Click the --> symbol to monitor only the traffic that passes from the
	     address selected in the left pane to the address selected in the right
	     pane.
	
	2. After selection has been made, click OK.
	
	3. In the Capture Filter dialog box, click OK.
	
	4. On the Capture menu, click Start.
	
	Saving Captured Data
	--------------------
	
	Use the Save As command to save capture statistics to a capture file or to save
	changes for later viewing. To save the captured frames to a capture file or text
	file:
	
	1. Do one of the following:
	
	   - On the toolbar, click File Save.
	
	   - Or, on the File menu, click Save As.
	
	2. Do one the following:
	
	   - To save the file to the current drive and directory, in the File Name box,
	     specify a file name and an extension. If you save a file that you have
	     modified, you cannot save it under its original name in the same
	     directory.
	
	   - To save the file to a network share to which you are not connected, click
	     Network, and then use the Connect Network Drive dialog box to establish
	     the connection.
	
	   - To save the file to a different drive or directory, do the following:
	
	     a. In the Drives box, select a new drive.
	
	     b. In the Directories box, select a new directory.
	
	     c. Type the file name.
	
	3. To save only those frame statistics that meet the specifications of the
	  current display filter, click Filtered. This option is available only if you
	  are saving data from the Frame Viewer window.
	
	4. To save a particular range of frames, type the beginning and ending frame
	  numbers in the From and To boxes.
	
	5. Click OK.
	
	  NOTE: When a range of frames is saved to a capture file, the numbers
	  associated with the frames are changed; in a capture file, frame numbers
	  always begin with 1, regardless of the number associated with the original
	  frame. Similarly, if you apply a display filter, and then save the filtered
	  frames, the frame numbers in the capture file begin with 1. If, however, you
	  use the Print to File option in the Print dialog box, the original frame
	  numbers associated with the frames are preserved.
	
	  To view frames saved to a file, you can open this file and display the
	  statistics in Network Monitor's Frame Viewer window
	
	Capturing Network Traffic
	-------------------------
	
	When capturing network traffic between two specific computers that are separated
	by one or more routers, check whether network packets are being lost or
	corrupted somewhere between the routers.
	
	To make these traces consistent and to be able to read these traces
	simultaneously, the system clocks must be synchronized between the two computers
	before you make the trace. To synchronize time between pairs of computers:
	
	1. Choose the computer with which you want to synchronize the time.
	
	2. From the other computer, type the command
	
	  net time \\<ComputerName> /set /yes
	
	where <ComputerName> is the name of the computer from step 1.
	
	3. Verify that the computers have the same time by typing the time command from
	  a command prompt on each computer.
	
	4. Complete the trace.
	
	Additional query words: netmon
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000
	Issue type        : kbhowto
	
	=============================================================================
	
