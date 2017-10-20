---
layout: page
title: "Q197407: PC Adm: Dirsync Events Not Scheduled Properly in Year 2000"
permalink: /kb/197/Q197407/
---

## Q197407: PC Adm: Dirsync Events Not Scheduled Properly in Year 2000

{% raw %}

	Article: Q197407
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail for PC Networks does not recognize the year 2000 as a leap year.
	If you attempt to use the Administrator program to schedule a directory
	synchronization (dirsync) event to occur on February 29, 2000, the event is not
	scheduled properly. This may cause unnecessary or undesired events to occur on
	February 29, 2000.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name   Date       Size
	  ------------------------------------
	  Admin.exe   12-08-98   535,869 bytes
	
	This hotfix has been posted to the following Internet location as Admy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	If you scheduled dirsync events to occur on February 29, 2000, before applying
	the fix, follow these steps to work around the problem:
	
	1. Delete or rename the Process.glb file.
	
	2. Install a new postoffice on another computer, and then copy the Process.glb
	  file from the new postoffice to the original postoffice.
	
	3. Use the Administrator program to schedule the events again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	version 3.5.
	
	MORE INFORMATION
	================
	
	If you configure a directory requestor postoffice to send all address list
	changes to the directory server postoffice (T1 event) or incorporate the changes
	received from the directory server postoffice (T3 event) on February 29, 2000,
	the event is saved to the Process.glb file. However, the event is appended to
	the end of the file, instead of being added to the existing record for that day
	of the week. This may cause the Dispatch program (Dispatch.exe) to run multiple
	times on that day of the week.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
