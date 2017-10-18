---
layout: page
title: "Q164439: Configuring an HP JetDirect printer to Monitor FPNW Print Queues"
permalink: kb/164/Q164439/
---

## Q164439: Configuring an HP JetDirect printer to Monitor FPNW Print Queues

	Article: Q164439
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Hewlett-Packard LaserJet printer with a JetDirect interface, which supports
	Novell PServer mode, may be configured to service print queues defined on a
	Windows NT Server computer running File and Print Services for NetWare (FPNW).
	
	NOTE: Only follow the steps in this article if the JetDirect interface used
	supports ONLY NetWare (IPX/SPX) connectivity. Use the DLC or LPR/LPD (TCP/IP)
	capabilities of the JetDirect interface if available. Any printer configured for
	use with Windows NT Server will be available for both Microsoft clients and
	NetWare clients (through FPNW) when the printer is shared. Configuring a printer
	as a normal Windows NT printer and sharing it is much simpler than the procedure
	outlined in this article.
	
	MORE INFORMATION
	================
	
	File and Print Services for NetWare allows a Windows NT Server's printers to
	appear as print queues on a NetWare network. These print queues may be monitored
	by a JetDirect-equipped Hewlett-Packard printer configured for NetWare printing
	support in Queue Server mode.
	
	NOTE: The procedure for creating printers differs between Windows NT Server
	version 3.51 and 4.0. Please follow the appropriate section below to create a
	printer queue.
	
	Creating a Shared Printer or Print Queue on
	Windows NT Server 3.51 with FPNW 3.51
	---------------------------------------------------------------------------------
	
	1. Start Print Manager.
	
	2. From the Printer menu, click Create to create a new printer.
	
	3. Type a name for the printer. This name will appear as the print queue name to
	  NetWare clients and to the JetDirect device.
	
	4. Select the appropriate driver for the printer and type a description for the
	  printer.
	
	5. In the "Print to" list, click NetWareCompatiblePServer0 (or the next
	  available NetWareCompatiblePserver port number).
	
	6. Click "Share this printer on the network" and type a share name and
	  location.
	
	  NOTE: The share name entered here is for Microsoft clients, while the printer
	  name will be used as a NetWare queue name for NetWare clients.
	
	7. Click OK.
	
	A print queue now exists, which the JetDirect device will service. The next
	section will create a Print Server on FPNW. This print server may or may not be
	required depending on the version of the JetDirect device. Consult the JetDirect
	documentation to determine if a print server is required on the file server
	being serviced. If not, skip the next 2 sections and continue with the On a
	NetWare workstation section.
	
	Creating a Print Server on Windows NT Server 3.51
	-------------------------------------------------
	
	1. Start Server Manager.
	
	2. Select the name of the Windows NT Server computer being administered.
	
	3. On the FPNW menu, click Print Servers, then click Add.
	
	4. Name the print server. This name must be the same as the HP JetDirect's
	  PServer name, which will be created in step 6 of the NetWare Workstation
	  section.
	
	5. In the Full Name list, type a name if desired, then click OK.
	
	6. Click Printers, then click Add in the "Printers on Print Server PServerName"
	  dialog box.
	
	7. Select a printer name and port number.
	
	  NOTE: The printer name is arbitrary, but the port number should be different
	  than other, previously created printers.
	
	8. For the Type, select Defined elsewhere and click OK.
	
	  The printer will now appear on the list of printers.
	
	9. Click Queues.
	
	10. On the Available Queues list, click the printer name defined in Print
	  Manager. Click Add->, and then click OK.
	
	11. Click Close in the "Printers on Print Server PServerName" dialog box, and
	  click close in the "Print Server for FileServer" dialog box.
	
	Creating a Shared Printer or Print Queue
	On Windows NT Server 4.0 with FPNW 4.0
	-------------------------------------------------------------------------------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon.
	
	3. In the Add Printer Wizard, select the "My Computer" option (default) and
	  click Next.
	
	4. In the Available Ports dialog box, select "NetWareCompatiblePServer0" or the
	  next available NetWareCompatiblePServer port number and click Next.
	
	5. Select the appropriate driver for the printer and click Next. Type a name for
	  the printer when prompted.
	
	  NOTE: The printer name used here will become the print queue name for NetWare
	  clients. The share name for the printer, which will be created later, is for
	  Microsoft clients.
	
	6. Select the appropriate option for default printer question, then click Next.
	
	7. Pick the Shared option, and type a Share Name for the printer.
	
	  NOTE: The share name will be used by Microsoft clients to connect to the
	  printer.
	
	8. Click Next. Select No for the option to print a test page, then click Finish.
	  The new printer will appear in the Printers window.
	
	Creating a Print Server on Windows NT Server 4.0
	------------------------------------------------
	
	1. Start Server Manager.
	
	2. Be sure to select the name of the Windows NT Server computer being
	  administered.
	
	3. On the FPNW menu, click Print Servers, then click Add.
	
	4. Type the name of the print server. This name must be the same as the HP
	  JetDirect's PServer name, that will be created in step 6 of the NetWare
	  Workstation section.
	
	5. In the Full Name list, type a name if desired, then click OK.
	
	6. Click Printers, then click Add in the "Printers on Print Server PServerName"
	  dialog box.
	
	7. Select a printer name and port number.
	
	  NOTE: The printer name is arbitrary, but the port number should be different
	  than other previously created printers.
	
	8. For the Type, select Defined elsewhere and click OK.
	
	  The printer will now appear on the list of printers.
	
	9. Click Queues.
	
	10. On the Available Queues list, click the printer name defined in Print
	  Manager. Click Add->, and then click OK.
	
	11. Click Close in the "Printers on Print Server PServerName" dialog box, and
	  click close in the "Print Server for FileServer" dialog box.
	
	NetWare Workstation
	-------------------
	
	NOTE: The steps below were completed using Hewlett-Packard's JetAdmin version
	A.01.11. This is a 16-bit DOS or Windows application. Exact steps to complete
	the JetAdmin functions may vary from version to version.
	
	1. Login as Supervisor (or an Administrator equivalent user) to the FPNW server.
	
	2. Start the Hewlett-Packard JetAdmin utility.
	
	3. In the list of JetDirect printers, select the printer to be configured.
	
	4. Click Configuration.
	
	  NOTE: To change the configuration, you must be logged into or attached to the
	  NetWare server that the printer was originally configured from as a
	  supervisor-equivalent user.
	
	5. In the Printer I/O Configuration window, ensure that the printer is in Queue
	  Server operating mode, not Remote Printer mode.
	
	6. In Queue Server Settings, verify that the print server (printer name) matches
	  the print server name created on the FPNW server.
	
	7. In the Selected Bindery Print Queues dialog box, click Add Queue. A list of
	  print queues on the FPNW server (Windows NT printer names) is displayed.
	
	8. Select the queue created earlier and click Add. A message will appear
	  indicating that the queue was added.
	
	9. Click OK, then click Close on the Available Print Queues listing.
	
	10. Verify that the queue appears in the Selected Bindery Print Queues listing.
	
	11. Click OK, and then click on Exit to leave the JetAdmin utility.
	
	To test the functionality of the configuration, capture an LPT port to the new
	queue on the FPNW server using the syntax below:
	
	  CAPTURE L=1 S=FPNWServerName Q=FPNWQueueName NB NT TI=10
	
	This capture command redirects LPT1 (L=1) to the FPNW queue (Windows NT
	printer).
	
	Parameter   Stands for or does this
	------------------------------------------------------------
	NB          No Banner
	NT          No Tabs (no conversion of tab characters to spaces)
	TI=10       Sets the amount of time to wait for more print data
	           before sending the job; referred to as AutoEndCap.
	
	NOTE: NetWare administrators may use different settings.
	
	After you capture the port, use the following command to send a directory listing
	to the printer:
	
	  DIR > LPT1:
	
	Verify that the page prints.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : :3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
