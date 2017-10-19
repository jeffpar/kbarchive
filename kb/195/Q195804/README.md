---
layout: page
title: "Q195804: XFOR: Imcsave Utility"
permalink: /kb/195/Q195804/
---

## Q195804: XFOR: Imcsave Utility

	Article: Q195804
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Connector (IMC) Configuration Extractor (Imcsave.exe) is a
	command-line tool that extracts IMC messages and configurations from the
	Microsoft Exchange Server information store and directory. These messages and
	configurations can then be restored on another computer.
	
	This tool allows Microsoft Product Support Services to collect information for
	troubleshooting, and to set up a matching configuration to reproduce problems.
	Use the IMC Configuration Extractor only with the assistance of Microsoft
	Product Support Services.
	
	A copy of the Imcsave utility can be found only on the BackOffice Resource Kit
	1.0 Part 1 or Part 2 CD.
	
	Starting with the release of Exchange Server 5.0 the Imcsave utility is available
	with the product. It can be found on Exchange Server 5.x CDs.
	
	MORE INFORMATION
	================
	
	The IMC Configuration Extractor does not require special installation and can be
	run from your directory.
	
	The IMC Configuration Extractor performs the following operations for collecting
	data and extracting IMC messages:
	
	- Looks in the registry to find the location of the Imcdata directory, then
	  creates a directory called Backup under the Imcdata directory. If the
	  directory already exists, the process quits.
	
	- Copies all IMC service registry values to a file called Imcsvc.reg.
	
	- Copies all IMC profile registry values to a file called Imcpro.reg.
	
	- Uses DAPI to export the gateway object to a file called Imcobj.csv.
	
	- Logs on to the service in the same manner as the Internet Mail Connector
	  does.
	
	- Immediately sets a flag in the information store, which prevents more mail
	  from being routed through the Internet Mail Connector.
	
	- Creates a directory called Imcdata\Backup\Mtsout, and copies all messages
	  from MTS-OUT into it using the transport-neutral encapsulation format (TNEF).
	
	- Creates a directory called Imcdata\Backup\Mtsin, and copies all messages from
	  MTS-IN into it.
	
	- Generates a packing list of all generated files called Imcfls, using the
	  format of an .ini file to encode the information.
	
	  USAGE: IMCSAVE [-output SaveDir] [-save Item [Item]...] [-delete]
	
	   -output SaveDir       Save all output under the specified directory
	                         (SaveDir) in a subdirectory named Backup.
	                         If not specified, output will be stored under the
	                         IMC root directory in a subdirectory named
	                         Backup.
	
	   -save Item [Item]...  Save the specified output Items.
	
	   Items include:
	
	       Reg[istry]                - IMC Registry data
	       Dir[ectory]               - IMC Directory Service data
	       MTSI[n]                   - MTS-IN message queue
	       MTSO[ut]                  - MTS-OUT message queue
	       Bad                       - Bad message queue
	       Con[tentConversionFailed] - ContentConversionFailed message queue
	       Work                      - Work message queue
	
	                         If -save is not specified, all Items are saved.
	
	   -delete               Delete messages in the queues.
	                         A confirmation dialog is conducted, and messages
	                         are only deleted if they are successfully saved
	                         in TNEF files.
	
	   -help                 Displays this screen.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
