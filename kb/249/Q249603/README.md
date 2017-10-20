---
layout: page
title: "Q249603: Using IISSYNC to Synchronize Clustered Web Sites on Windows 2000"
permalink: /kb/249/Q249603/
---

## Q249603: Using IISSYNC to Synchronize Clustered Web Sites on Windows 2000

{% raw %}

	Article: Q249603
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 15-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IISSync, which is used to synchronize the metabase of clustered Web servers, is
	still available on Windows 2000 Advanced Server. Specific steps are needed to
	ensure that IISSync is executed correctly.
	
	The default anonymous user accounts (IUSR_servername and IWAM_servername) used
	for Web authentication and impersonation are local accounts on the Windows 2000
	Server where IIS is installed. In order to use IISSync to automatically
	synchronize the metabase to both nodes, domain accounts need to be created to
	replace the two default accounts.
	
	MORE INFORMATION
	================
	
	The following steps are required to run IISSync when the clustered nodes are
	both member servers:
	
	NOTE: IISSync and the VBScripts are installed and registered when the World Wide
	Web (WWW) Server service is installed. When clustering an IIS Server Instance
	for a FTP site, ensure the WWW Server service is installed.
	
	NOTE: If the clustered nodes are domain controllers, you can skip steps 1 through
	4.
	
	1. On a domain controller for the member servers, click Start, click Programs,
	  and then choose Administrative Tools.
	
	2. Open the Active Directory and choose Users and Computers.
	
	3. Expand the tree under the domain name, and then click to highlight the Users
	  folder. Right-click and select New User. Create two new domain accounts in
	  the Domain Users group (for example IUSR_uniquename and IWAM_uniquename).
	
	4. On the two cluster nodes, right-click My Computer, and then select Manage.
	
	5. With the Computer Management snap-in, expand Local Users and Groups, expand
	  Groups, and then click Users. Add the two new user accounts as
	  domain\IUSR_uniquename and domain\IWAM_uniquename. By default, Domain Users
	  will be a member of the local Users group and local Users group is granted
	  the "Log on Locally" right.
	
	  To manually assign the two domain accounts the "Log on Locally" right, open
	  Administrative Tools and select Local Security Policy. In Security settings,
	  expand Local Policies and User Right Assignment. Click Log on locally, and
	  then click Add. Add the two domain accounts.
	
	6. Open the Internet Services Manager from Node A. From the clustered Web site's
	  Properties page, select Directory Security, select Anonymous Access, and then
	  choose Edit. Replace the default anonymous user account with the domain user
	  account (IUSR_uniquename) and password as you specified.
	
	7. From the command prompt on Node A, go to the directory
	  systemdrive:\inetpub\adminscripts and run the following:
	
	  Cscript adsutil.vbs SET W3SVC/WAMUserName domain\IWAM_uniquename
	
	  Cscript adsutil.vbs SET W3SVC/WAMUserPass "userpassword"
	
	  NOTE: If you receive a dialog box prompting to use CScript as host for
	  VBScript, click OK, and then run both scripts again without "Cscript."
	
	8. From the command prompt on Node A, go to the directory
	  systemdrive:\winnt\system32\inetsrv and run the following:
	
	  iissync nodeBcomputername
	
	  IISsync will return a status of 0 that indicates that IISSync finished
	  successfully. Node B is now synchronized with the same metabase settings from
	  Node A.
	
	If IISSync returns a status other than 0, refer to the following article to
	isolate the reason for the failure:
	
	  Q224801 Deciphering IISSYNC Status Codes
	
	For more information on the NTOP IISSync utility, refer to the NTOP installation
	in the Installing the Windows NT Option Pack on Microsoft Cluster Server (MSCS)
	white paper.
	
	Additional query words: MSCS, IISSYNC, adsutil, cluster, Advanced Server, NTOP, IIS
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Search kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
