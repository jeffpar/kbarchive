---
layout: page
title: "Q141112: LPR Postscript Clients Printing to LPD Server"
permalink: /kb/141/Q141112/
---

## Q141112: LPR Postscript Clients Printing to LPD Server

{% raw %}

	Article: Q141112
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Non Microsoft LPR client prints a Postscript job to a print queue on a
	Windows NT Server running the LPD Service, the output is Postscript code instead
	of the desired formatted output.
	
	CAUSE
	=====
	
	The LPR Client is not sending the correct control code to the Windows NT LPD
	Server as defined in RFC1179. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q124735 How Windows NT LPD Server Implements LPR Control Characters
	
	RESOLUTION
	==========
	
	If configuring the LPR client is not possible, create a print queue using the
	Generic / Text Only driver and direct the output of the queue to the Postscript
	printer. This will pass the job through to the Postscript printer unaltered,
	except for added carriage returns which Postscript ignores, and the printer will
	format the document properly. This queue will only work correctly when sending
	Postscript jobs.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q124735 How Windows NT LPD Server Implements LPR Control Characters
	
	  Q132460 Troubleshooting Windows NT Print Server Alteration of Print Jobs
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
