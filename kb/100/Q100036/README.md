---
layout: page
title: "Q100036: Mac Wkst: Explanation of Give Up Dialog Box"
permalink: /kb/100/Q100036/
---

## Q100036: Mac Wkst: Explanation of Give Up Dialog Box

{% raw %}

	Article: Q100036
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, the
	workstation makes requests across the network to the Mail server. If after
	making a request the Mail workstation fails to get a response, the workstation
	displays the dialog box:
	
	  Looking for Microsoft Mail Server. Give Up
	
	Depending on the state of the Mail system, this dialog box may appear and
	disappear or may be displayed constantly on the screen.
	
	MORE INFORMATION
	================
	
	The workstation makes requests from the server. If it does not get a reply after
	two retries, it displays the Give Up dialog box and at the same time sends out a
	network lookup request to see if it can find the server.
	
	If the server is found, the Give Up dialog box is dismissed (canceled) and the
	cycle starts again with the workstation sending the original request again.
	
	If the server is not found, the Give Up dialog box is not dismissed and in
	approximately five seconds, the workstation sends out another network lookup
	request to see if it can find the server. The workstation continues looking for
	the server in this manner until it finds the server or until the user dismisses
	the Give Up dialog box.
	
	Note that Microsoft Mail uses only two AppleTalk protocols: AppleTalk Transaction
	Protocol and Name Binding Protocol.
	
	There are many reasons why the Mail server may not respond to the workstation:
	
	1. The network is not properly terminated. Mail 3.1 is more sensitive to this
	  problem than previous versions of Mail.
	
	2. The server is temporarily busy responding to other workstation requests. Mail
	  3.1 has the capacity to respond to eight user requests at one time while
	  earlier versions of Mail can only handle four user requests at a time.
	
	3. The server is no longer up and running. Verify this by looking in the
	  Chooser.
	
	4. For multi-zone AppleTalk networks, a router or bridge may be down.
	
	5. There is a problem on the network such that network packets are lost,
	  delayed, or corrupted. When signing onto Mail servers that are physically a
	  long distance away, Give Ups are more likely.
	
	In general, it is best to use the most current version of Microsoft Mail. With
	each new version of Mail, problems with earlier version(s) are fixed. Some of
	these fixes correct problems that can cause Give Up problems.
	
	Additional query words: 3.00 3.10 steady giveup
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
