---
layout: page
title: "Q59113: Mac Srv: Managing &quot;Headless&quot; Servers with Farallon's Timbuktu"
permalink: kb/059/Q59113/
---

## Q59113: Mac Srv: Managing &quot;Headless&quot; Servers with Farallon's Timbuktu

	Article: Q59113
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Farallon Computing's Timbuktu can be used to administer Microsoft Mail version
	2.0, 2.0a, 2.0b, or 3.0 servers remotely on a local area network (LAN).
	SoftScreen, a special feature of Timbuktu, allows a modular Macintosh (for
	example a Macintosh II or a Macintosh IIcx) to be used as a server without the
	added cost of a keyboard, video card, or monitor for each server.
	
	MORE INFORMATION
	================
	
	Directions for Remote Server Administration
	-------------------------------------------
	
	Install a copy of Timbuktu on each Mail server and on the Network Manager's
	Macintosh.
	
	Once the servers are installed, follow this series of steps to administer a
	server:
	
	1. From the Network Administrator's Macintosh, open the Timbuktu desk accessory
	  (DA) and select Control to view and operate a Mail server.
	
	2. Move the Microsoft Mail Server file out of the System Folder and choose
	  Restart from the Finder's Special menu. This temporarily disables the Mail
	  server, allowing you to back up/restore the Microsoft Mail data file.
	
	3. Restarting the Mail server breaks the Timbuktu connection so, after allowing
	  a minute or so for the server to restart, use Timbuktu's Control option to
	  reconnect to the server.
	
	4. Back up the Microsoft Mail data file.
	
	5. After completing the backup, put the Microsoft Mail Server file back in the
	  System Folder and choose Restart from the Special menu in the Finder. The
	  backup/restore is complete and the mail server is ready for use.
	
	(Note: Timbuktu/Remote is specifically designed for dial-up links, and allows the
	use of a modem to administer Microsoft Mail servers at other locations.)
	
	Running a "Headless" Server
	---------------------------
	
	Note: Mail may not run successfully on some Macintosh II computers without
	monitors. This problem has been seen on Macintosh II's that have built-in
	video.
	
	When using a Macintosh II family computer as a Mail server, Timbuktu's SoftScreen
	feature saves the expense of buying a video card, monitor, keyboard and mouse
	for each Mail server. When Timbuktu detects that it is operating from a modular
	Macintosh with no video card, SoftScreen automatically reserves a portion of
	computer memory as an invisible video monitor. SoftScreen automatically allows
	controllers and observers so that there can be a connection to the Mail server
	from another Timbuktu-equipped Macintosh on the network. Note that you can use
	Timbuktu's security features to restrict access to servers.
	
	For more information on Timbuktu and Timbuktu/Remote, call Farallon Computing at
	(415) 596-9000.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
