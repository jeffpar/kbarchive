---
layout: page
title: "Q121089: ErrMsg w/ArtiSoft Noderunner: 2191-You Cannot Stop the Service"
permalink: kb/121/Q121089/
---

## Q121089: ErrMsg w/ArtiSoft Noderunner: 2191-You Cannot Stop the Service

	Article: Q121089
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an Artisoft Noderunner network card, you receive the
	following error message
	
	  ERROR: 2191 - You cannot stop the service you specified at this time.
	
	when you start Windows for Workgroups or after you run the NET START FULL command
	from an MS-DOS command prompt.
	
	CAUSE
	=====
	
	By default, revisions of the Noderunner card earlier than 6 are not correctly
	configured to work with Windows for Workgroups NE2000 or NE1000 drivers.
	Revisions earlier than 6 come with a disk that configures this card to an NE1000
	only.
	
	RESOLUTION
	==========
	
	To properly configure this card for Windows for Workgroups:
	
	- Run the NRCONFIG.EXE or NRSETUP.EXE that ships with the card. In the
	  configuration option, set the card to be NE1000 compatible. For full
	  instructions on these files, contact Artisoft technical support.
	
	  -or-
	
	- Contact Artisoft for the latest chip revision for the card. Chip revisions
	  greater than 6 ship with a newer NRCONFIG.EXE or NRSETUP.EXE that allows the
	  card to work with Windows for Workgroups 3.11 as either an NE1000 or an
	  NE2000.
	
	Additional query words: nic net start err msg 6.0 6.00 noderuner node runner
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
