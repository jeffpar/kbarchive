---
layout: page
title: "Q162189: Macintosh Clients May Hang Temporarily with Multiple Mac Volumes"
permalink: /kb/162/Q162189/
---

## Q162189: Macintosh Clients May Hang Temporarily with Multiple Mac Volumes

{% raw %}

	Article: Q162189
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT MacFile server with multiple Macintosh volumes, Macintosh
	clients may experience wait times showing network busy (-><-) for varied
	lengths of time while Afp calls requiring an exclusive lock retry. This issue
	can be verified in a network trace where Macintosh clients are seen to be
	issuing retry calls AfpGetFileDirParms and AfpCloseFork until an exclusive
	volume lock on the MacFile server is released.
	
	CAUSE
	=====
	
	Where multiple volumes exist, as file status changes were being processed across
	various Macintosh volumes, an exclusive and volume-specific lock was being
	applied during volume change notify processing. In a particular instance, a
	volume-specific lock was not being released. This lock was released as more
	volume changes were processed; however, wait times varied.
	
	RESOLUTION
	==========
	
	The issue was addressed in a code change that manages the change notify
	processing more efficiently and resolves the held lock condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In addition, performing the following actions can have a positive impact on
	Macintosh performance:
	
	1. Disabling the Catsearch Function - this requires the hotfix for Windows NT
	  version 3.51 or Service Pack 3 or later for Windows NT version 4.0 and a
	  registry change.
	
	2. Disabling EnableOplocks on the NT Server (registry change only).
	
	3. Reducing AppleTalk Traffic by using a 3rd party application called Less Talk
	  on the Mac client.
	
	4. If Microsoft Mail is being used -- reset the PC Polling interval on the MS
	  Mail client to reduce the frequency of polling for new mail.
	
	5. Apply a hotfix that resolved a record locking issue -- "Record Unlock After
	  PC Release" (this fix should be included in the hotfix under item number one.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q158796
	  TITLE : Macintosh Clients Connected to WinNT Server Appear to Hang
	
	  ARTICLE-ID: Q129202
	  TITLE : PC Ext: Explanation of Opportunistic Locking on Windows NT
	
	  ARTICLE-ID: Q150879
	  TITLE : SFM: Macintosh Computers Create a Lot of Network Traffic
	
	  ARTICLE-ID: Q150978
	  TITLE : SFM: Optimizing Polling Rate for Macintosh Clients for PCMail
	
	  ARTICLE-ID: Q159994
	  TITLE : SFM Does Not Unlock Record After PC Releases Lock
	
	Additional query words: prodnt sfm ntsfm
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
