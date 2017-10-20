---
layout: page
title: "Q91197: How To: Troubleshooting a Network DDE Link with WFWG"
permalink: /kb/091/Q91197/
---

## Q91197: How To: Troubleshooting a Network DDE Link with WFWG

{% raw %}

	Article: Q91197
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows for Workgroups, the Windows Clipboard Viewer was completely rebuilt
	as ClipBook Viewer, which includes capabilities to transfer information over the
	network (called network dynamic data exchange [DDE]).
	
	MORE INFORMATION
	================
	
	To test network DDE, both machines should be running the same video driver, such
	as VGA (16 colors), which shipped with Windows for Workgroups.
	
	Network DDE works like object-linking-and-embedding (OLE) over a network. There
	are several logical steps to troubleshoot a network DDE problem:
	
	1. Make sure that the machines can communicate with each other. To test this,
	  try to copy a file from one machine to another. Remember that a Windows for
	  Workgroups machine needs to be in enhanced mode and have 4 megabytes (MB) of
	  memory to have server functionality.
	
	2. To make sure that the problem is not application-related, do a network DDE
	  link using Paintbrush and Write. The steps are as follows:
	
	  a. Open a bitmap in Paintbrush and copy it to the Clipboard.
	
	  b. Open ClipBook. From the Edit menu, choose Paste. This brings up a dialog
	     box that asks for a Page (Share) Name.
	
	  c. Type "test" (without the quotation marks) as the Page Name and choose OK.
	     (Make sure the Share Item Now box is selected.)
	
	  d. When the next dialog box comes up, choose Start Application On Connect.
	
	  e. From the Client machine, open ClipBook. From the File menu, choose
	     Connect.
	
	  f. Select the server name from the list, then select the "test" file.
	
	  g. From the Edit menu, choose Copy.
	
	  h. Start Write. From the Edit menu, choose Paste Link. This should create a
	     Network DDE link from Paintbrush on the server machine to Write on the
	     client machine.
	
	  i. Test the link by drawing in Paintbrush on the server and see if Write is
	     updated on the client.
	
	If Write isn't updated, there is a problem with Network DDE. If the above steps
	work, the problem is in one or both of the applications that were having the
	original problem.
	
	Each of the applications can be tested with Write or Paintbrush to determine
	which application is at fault. Some applications may have to be upgraded to work
	properly with Network DDE. Check with the application vendor for more
	information on a specific application.
	
	Additional query words: 3.10 3.1 netdde win31 tshoot 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
