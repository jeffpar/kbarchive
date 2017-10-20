---
layout: page
title: "Q257740: PC DirSync: Global Reset for Microsoft Mail"
permalink: /kb/257/Q257740/
---

## Q257740: PC DirSync: Global Reset for Microsoft Mail

{% raw %}

	Article: Q257740
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your system may experience the following symptoms:
	
	- User changes on a Microsoft Mail (MS Mail) directory synchronization
	  (dirsync) server postoffice do not show up in the global address list on
	  other requestor postoffices.
	
	- Requestor postoffices have missed more than 14 dirsync cycles (the default
	  number of cycles). This number may change depending on the setting for the
	  number of days to keep that is selected when you choose Config, choose
	  Dir-Sync, choose Server, and then choose Options. If this setting has been
	  increased from the default value, there may be a problem when the updates are
	  processed (especially with thousands of users). The MSTTRANS.GLB file would
	  increase drastically in size.
	
	This article describes how to make sure that updates made on the dirsync server
	are implemented in the global address list.
	
	RESOLUTION
	==========
	
	To resolve these symptoms you must perform a "global reset." Before you do so,
	be sure to reset both the system and inqueue .KEY and .MBG files on all of the
	participating postoffices. These are the inbound and outbound mailbags for
	dirsync messages only. They can be reset by following the instructions in the
	following Microsoft Knowledge Base article
	
	  Q104279 PC DB: Creating or Resetting a .KEY and .MBG Pair
	
	or by using the Mailq16 utility.
	
	IMPORTANT: Only reset the dirsync server postoffice synchronization numbers after
	you have made sure that you are experiencing the symptoms that are listed in the
	"Symptoms" section of this article, and only after you have consulted with
	Microsoft Product Support Services (PSS). This procedure entails a substantial
	amount of work for the dirsync administrator, which may be unnecessary if
	preliminary troubleshooting procedures can resolve the issue.
	
	MORE INFORMATION
	================
	
	To perform a global reset:
	
	1. On the dirsync server postoffice:
	
	  a. Start the Administrator program, choose Config, choose Dir-Sync, choose
	     Options, and then choose No. When a warning is displayed, choose Yes.
	
	     IMPORTANT: This step deletes the SRVCONF.GLB and MSTTRANS.GLB files from
	     the server. After you finish this step, you must perform all of the
	     following steps.
	
	  b. Reset the REQCONF.GLB file on the dirsync server by running the following
	     command:
	
	  listds admin -p(password) -d(drive) -r -z
	
	  c. Enable the dirsync server by starting the Administrator program, choosing
	     Config, choosing Dir-Sync, choosing Options, and then choosing Yes.
	
	  d. Choose Config, choose Dir-Sync, choose Server, choose Requestors, and then
	     choose Create to redefine all of the requestors.
	
	  e. Choose Config, choose Dir-Sync, choose Requestor, and then choose Types to
	     reset the types of names propagated by dirsync.
	
	     IMPORTANT: This step is only necessary if gateways are installed and
	     gateway names are included in dirsync.
	
	  f. Choose Config, choose Dir-Sync, choose Requestor, and then choose Export
	     to send the list to the other postoffices.
	
	2. On each requestor postoffice:
	
	  a. Reset the REQCONF.GLB file by running the following command:
	
	  listds admin -p(password) -d(drive) -r -z
	
	  b. Verify that the REQCONF.GLB file is reset properly by running the
	     following command:
	
	  listds admin -p(password) -d(drive) -r
	
	     The ReqSync and SrvSync numbers should both be zero (0).
	
	  c. Choose Config, choose Dir-Sync, choose Requestor, and then choose Types to
	     reset the types of names propagated by dirsync.
	
	     IMPORTANT: This step is only necessary if gateways are installed and
	     gateway names are included in dirsync.
	
	     If you use an older version of the Listds utility, the name of the dirsync
	     server is reset as well. If this occurs, reregister the dirsync server by
	     choosing Config, choosing Dir-Sync, choosing Requestor, and then choosing
	     Registration.
	
	  d. Choose Config, choose Dir-Sync, choose Requestor, and then choose Export
	     to send the list to the other postoffices.
	
	All of the dirsync files should now be reset.
	
	Wait for Dispatch to complete the next dirsync cycle, and then review the log
	files to make sure that everything is working properly.
	
	Additional query words: global reset GAL
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
