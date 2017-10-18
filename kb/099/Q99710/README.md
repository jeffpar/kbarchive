---
layout: page
title: "Q99710: Four HP Printer Problems Associated with LAN Manager"
permalink: kb/099/Q99710/
---

## Q99710: Four HP Printer Problems Associated with LAN Manager

	Article: Q99710
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	SUMMARY
	=======
	
	This article discusses four problems encountered with Hewlett Packard token ring
	printers running off of LAN Manager 2.1 servers. Details on the network
	configuration that reported the problems are found below.
	
	MORE INFORMATION
	================
	
	The network reporting these problems contained: 9 LAN Manager 2.1 file servers
	with 6 HP token ring printers attached to each server. The servers were running
	HPFS, Irmatrak and IBM token ring cards running NetBEUI. The HPs were running
	the HP-jet direct cards at 4 MB/sec. The printers were physically connected to
	the server through 2 Synoptics concentrators and a Cisco router.
	
	PROBLEM 1:
	
	SYMPTOMS
	========
	
	No more than six printers are allowed per LAN Manager server.
	
	The HP3Si printers come up with Error 40 on them for no apparent reason. If you
	reset, the server connection is re-established. HP3s and HP3Ds do not get an
	Error 40, but they stop printing and have to be turned off and back on to
	re-establish the connection.
	
	The HP setup program on the server displays some of the already connected
	printers, not just the new (unconnected) printers, as it should. This display
	changes from hour to hour.
	
	You cannot delete an in-progress print job. If a printer stops printing a job,
	you cannot restart it because of the stuck print job. You can delete the print
	queue and recreate it, but sometimes a queue does not delete even after
	rebooting the server 2-3 times.
	
	CAUSE
	=====
	
	This is a thread limitation problem related to OS/2 and to HPREDIR, which
	through design use many threads per printer.
	
	This probably indicates a loss of the logical connection between the server and
	the printer.
	
	HP printers should broadcast availability only when they are NOT connected to a
	server. NOTE: only one server can connect to a printer with the OS/2 HPREDIR.EXE
	(this is not true for Windows NT and Windows for Workgroups). The appearance of
	the printer's NIC address might indicate that the printer cannot determine that
	the server is still out there.
	
	A software problem with PMSPL.DLL in LAN Manager 2.1, fixed in versions 2.1a and
	2.2.
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	RESOLUTION
	==========
	
	The latest version of HP Jet Direct software (A.00.03) supports seven printers,
	due to a new architecture of HPREDIR.EXE. The seven printer limit is still due
	to the OS/2 thread limit mentioned above.
	
	PROBLEM 2:
	
	Consult HP about the Error 40.
	
	PROBLEM 3:
	
	As implied by the CAUSE of the problem, this usually means that no server has a
	connection to the printer. Check the HP Setup program for the server that should
	have the connection to see if the connection has been lost. If it has not been
	lost and you suspect problems, contact HP Technical Support. In any case, do not
	establish two LAN Manager servers that use the same physical HP Printer. When a
	LAN Manager server (using the OS/2 HPREDIR.EXE) connects to the HP printer, it
	establishes a "permanent" connection.
	
	Under Windows NT and Windows for Workgroups, it is possible to connect only for
	the duration of a print job. Although this allows multiple servers to use the
	same physical printer, it adds complexity to your printing solution and
	Microsoft does not recommend it.
	
	PROBLEM 4:
	
	Improved by a software fix. Sometimes, a print job that still will not cancel
	with the new PMSPL.DLL from LAN Manager 2.1a and 2.2 can be canceled if
	HPREDIR.EXE is terminated gracefully.
	
	It's a good idea to run the HPREDIR in STARTUP.CMD instead of CONFIG.SYS. Here is
	the procedure:
	
	1. Remark out the RUN=C:\HPNETPRN\HPREDIR.EXE at the bottom of your CONFIG.SYS.
	
	2. Add START C:\HPNETPRN\HPREDIR.EXE to STARTUP.CMD (maybe just before starting
	  the server).
	
	This has two advantages:
	
	- The HPREDIR.EXE program generates very useful information to STDOUT that is
	  never seen when it is started as a detached process (as
	  RUN=C:\HPNETPRN\HPREDIR.EXE), but is viewable in the new OS/2 window that is
	  created to run HPREDIR when you START HPREDIR.
	
	- It lets you choose either of two methods to stop the HPREDIR--the fast method
	  or the preferred method. Method #1--FAST:
	
	  You can CTRL+C the HPREDIR.EXE and stop it (sometimes freeing PRINT MANAGER to
	  delete a print job--this was the only mechanism available before the
	  PMSPL.DLL fix), then do another START C:\HPNETPRN\HPREDIR.EXE to reconnect
	  the server to the printer.
	
	  This has the disadvantage of terminating HPREDIR.EXE without allowing it a
	  chance to gracefully shut down.
	
	  Method #2--PREFERRED:
	
	  HP has included a mechanism in their INSTALL program to stop HPREDIR if it
	  happens to be running. You can invoke this mechanism (without doing an actual
	  re-installation).
	
	  1. Start the program C:\HPNETPRN\INSTALL.EXE.
	
	  2. Choose a default language of your choice (which one is not important).
	
	  3. Hit ENTER until the dialog appears that asks you where you wish to install
	     the software (defaults to C:\HPNETPRN).
	
	  4. At this dialog, press ESC (this should drop you to a C:\ prompt).
	
	  5. At this point, HPREDIR.EXE has received a KILL REDIR message from the
	     INSTALL program and has terminated gracefully.
	
	  This method of terminating HPREDIR.EXE also works when HPREDIR is running as a
	  detached process from CONFIG.SYS.
	
	Additional query words: wfw wfwg adapter 2.10 2.1 2.10a 2.1a
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
