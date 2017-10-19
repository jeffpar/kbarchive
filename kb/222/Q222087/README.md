---
layout: page
title: "Q222087: How To Combine Multiple SNA Subdomains Into One Using Snacfg"
permalink: /kb/222/Q222087/
---

## Q222087: How To Combine Multiple SNA Subdomains Into One Using Snacfg

	Article: Q222087
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11SP1, 2.11SP2, 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, it may be beneficial to combine multiple SNA subdomains into one.
	While the recommended method for doing this is to demote one primary SNA Server
	to a backup, have it join the desired subdomain, and then recreate its previous
	configuration (such as connections, users, LUs, and so on), it is possible to
	combine the Com.cfg files from the two primary servers so that the new backup
	server's configuration is retained. Combining Com.cfg files can be accomplished
	using Snacfg.exe, the SNA Server command line utility.
	
	MORE INFORMATION
	================
	
	When combining the Com.cfg files from multiple SNA subdomains, there cannot be
	duplicate names of any of the items listed below:
	
	- SNA Server names
	
	- Connection names
	
	- LU names
	
	- Shared folder share names
	
	- Print session names
	
	- Pool names
	
	- User names
	
	- Workstation names
	
	- Host security domain names
	
	NOTE: If the Everyone group is configured under the Configured Users folder in
	SNA Manager, remove that group and re-add it in SNA Manager after the Com.cfg
	files have been combined.
	
	In the following scenario, Server A is the primary SNA Server in subdomain A.
	Server B is the primary SNA Server in subdomain B, and it will be joining
	subdomain A as a backup server.
	
	1. On Servers A and B, export each Com.cfg file to a text file using the
	  following command:
	
	  "snacfg #[<configpath>] /print>filename.txt" (without the quotation
	  marks)
	
	2. Save the text files, and name them so that you can tell which SNA Server each
	  corresponds to (for example, ServerA.txt and ServerB.txt).
	
	3. Open ServerB.txt in Notepad. On the Edit menu, choose Select All, and then
	  Copy.
	
	4. In another Notepad window, open ServerA.txt. Move the cursor to the bottom of
	  ServerA.txt, leave one blank line, and paste the text that was copied from
	  the ServerB.txt.
	
	5. On the File menu, select Save As, and name the combined text file (for
	  example, Combined.txt).
	
	6. Copy the blank Com.cfg file from the SNA Server CD onto your hard drive. The
	  file is located in the I386\System\Config directory on the CD.
	
	7. After you copy the blank Com.cfg, go into the properties of the file and
	  clear the Read Only check box.
	
	8. Compile the text file containing the configurations of both SNA Servers back
	  into the blank Com.cfg file you copied from the SNA Server CD. To do so, run
	  the following command from a command prompt:
	
	  "snacfg #[<configpath>] @combined.txt /v" (without the quotation marks)
	
	NOTE: The <configpath> above is the path to the blank Com.cfg. The /v
	option stands for "verbose," and it is optional. If there are any errors in
	compiling the text file into the blank Com.cfg, /v will identify the line where
	the error is in the text file.
	
	9. The new Com.cfg now contains the configurations of both servers. The file may
	  be viewed offline in SNA Manager. Verify that the configuration information
	  looks correct. There are several items that you should check at this point:
	
	   - If there are APPC print sessions configured, go into the properties of
	     each of these print sessions, and re-enter the AS/400 User ID and Password
	     on the Security tab.
	
	   - If there are 3270 print sessions configured to use PDT files, go into the
	     properties of each print session, select the Overrides tab, and click the
	     PDT File button to browse and locate the PDT file. Select the PDT file,
	     and click OK.
	
	   - If Host Security is configured, you may need to re-assign connections to
	     the Host Security Domains. Also, you may need to re-add the user
	     information in Host Account Manager.
	
	   - If you removed the Everyone group from Configured Users, re-add it at this
	     time. For each of the other users (and groups) run the following command
	     from a command prompt:
	
	  "snacfg #[<configpath>] user /validate" (without the quotation marks)
	
	NOTE: If the command above is not run for each user, the users may receive an
	error message saying "User is not configured" when they try to connect sessions
	to the SNA Server, even though the users appear in SNA Manager and have LUs
	assigned to them.
	
	10. When you have verified that the new Com.cfg is ready to use, stop the
	  SnaBase service on Server A and Server B. Make backup copies of the existing
	  Com.cfg files on each server (in case they need to be restored for any
	  reason). Copy the new Com.cfg to the Sna\System\Config directory on Server
	  A.
	
	11. Delete the Snaexp.snav file from the Sna\System directory on Server A and
	  Server B. This file will get recreated when SNA Manager is restarted. For
	  additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q175110 How to Change the Subdomain Name in SNA Server
	
	12. SNA Server A (the primary) is ready to operate with the new Com.cfg at this
	  point. On Server B, from a command line, run "svconfig.exe" (without the
	  quotation marks). This will bring up the Server Configuration screen. Demote
	  Server B to a backup server, enter the name of the primary server (Server
	  A), and enter the name of the subdomain that this server will be joining
	  (subdomain A).
	
	13. Reboot Server B. It should now be functional as a backup server in subdomain
	  A.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : :2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbhowto
	
	=============================================================================
	
