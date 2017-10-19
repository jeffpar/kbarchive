---
layout: page
title: "Q112578: Creating a Setup Disk for the Updated WFW 3.11 TCP/IP Drivers"
permalink: /kb/112/Q112578/
---

## Q112578: Creating a Setup Disk for the Updated WFW 3.11 TCP/IP Drivers

	Article: Q112578
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The updated TCP/IP for Windows for Workgroups 3.11 files do not contain a
	SETUP.EXE program that can be executed for a first time installation. If you
	have the old TCP/IP Windows for Workgroups 3.11 disk, it can be modified to
	install the updated files.
	
	MORE INFORMATION
	================
	
	Using the self-extracting file WFWTCP.EXE and your old TCP/IP Windows for
	Workgroups 3.11 disk, follow these steps to install the new Windows for
	Workgroups TCP/IP network protocol drivers:
	
	1. Download the self-extracting 408k file, WFWTCP.EXE, dated 01/27/94, from the
	  following Microsoft Web site:
	
	  http://download.microsoft.com/download/wfw311/tcpip/3.11/WFW/EN-US/wfwtcp.exe
	
	2. Copy WFWTCP.EXE to your hard disk.
	
	3. Insert the old TCP/IP for Windows for Workgroups 3.11 disk in a floppy drive.
	
	4. From the command prompt, change directory to the directory where the file
	  WFWTCP.EXE is located.
	
	5. Type "WFWTCP <floppy drive>" without the quotes and press ENTER. This
	  extracts the new TCP/IP files archived in the WFWTCP.EXE file and overwrites
	  the old files on the floppy disk. Two extra files containing windows help for
	  TCP/IP will also be added to the disk.
	
	6. Start Windows for Workgroups and choose the Network icon.
	
	7. In the Network window choose the Network Setup icon.
	
	8. In the Network Setup window choose the Drivers button.
	
	9. In the Network Drivers window choose the Add Protocol button.
	
	10. Select Unlisted or Update Protocol from the edit list and choose the OK
	  button.
	
	11. Indicate which floppy drive you have inserted the Windows for Workgroups
	  TCP/IP installation disk in and choose the OK button.
	
	12. Microsoft TCP/IP should be selected in the edit list. Choose the OK button.
	
	13. The Microsoft TCP/IP Configuration appears. Enter your IP address other
	  network information. Choose the OK button.
	
	14. Continue to choose the OK button until you are prompted to reboot your
	  computer. Select the restart option.
	
	Following is a list of the 30 files archived in the WFWTCP.EXE file:
	
	  ADDNAME  EXE              14887 12/20/93  12:00a
	  DNR      EXE              31152 12/20/93  12:00a
	  EMSBFR   EXE               4294 12/20/93  12:00a
	  HOSTS                       749 05/08/93  08:47p
	  LMHOSTS                     846 05/08/93  08:47p
	  MSTCPIP  HLP             132028 12/30/93  12:26p
	  NEMM     DOS               2619 12/20/93  12:00a
	  NETWORKS                    395 05/08/93  08:47p
	  NMTSR    EXE              22874 12/20/93  12:00a
	  OEMSETUP INF               1267 01/04/94  11:21a
	  PING     EXE              66460 12/20/93  12:00a
	  PROTOCOL                    795 05/08/93  08:47p
	  READTCP! TXT               9317 01/27/94  02:49p
	  RPC16C3  DLL               5632 06/14/93  05:15p
	  SERVICES                   5962 05/08/93  08:47p
	  SOCKETS  EXE              50144 12/20/93  12:00a
	  TCPDRV   DOS               4180 12/20/93  12:00a
	  TCPOVER  HLP              82990 02/26/93  11:23a
	  TCPSETUP DLL              38192 06/09/93  04:09p
	  TCPSETUP HLP              13487 05/08/93  08:51p
	  TCPTSR   EXE              66752 12/20/93  12:00a
	  TCPUTILS INI                233 06/03/93  01:49p
	  TINYRFC  EXE              33376 12/20/93  12:00a
	  UMB      COM               3325 12/20/93  12:00a
	  VBAPI    386               9524 12/20/93  12:00a
	  VSOCKETS 386               9535 12/20/93  12:00a
	  WIN_SOCK DLL              30912 12/20/93  12:00a
	  WINSOCK  DLL              47968 12/20/93  12:00a
	  WSAHDAPP EXE               5152 12/20/93  12:00a
	  WSOCKETS DLL              32768 12/20/93  12:00a
	
	Additional query words: wfw wfwg 3.11 tcp setup
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11
	
	=============================================================================
	
