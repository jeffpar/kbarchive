---
layout: page
title: "Q235873: SMS: Specifying Preferred Servers in Systems Management Server"
permalink: /kb/235/Q235873/
---

## Q235873: SMS: Specifying Preferred Servers in Systems Management Server

{% raw %}

	Article: Q235873
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Previously, when you created preferred server entries in the registry on a
	Systems Management Server 2.0 client, you had to specify a fully qualified
	Network Abstraction Layer (NAL) path similar to the following text:
	
	  MSWNET:["SMS_SITE=zzz"]\\ServerName\CAP_zzz\  (for a CAP)
	  NWBIND:["SMS_SITE=zzz"]\\ServerName\VolumeName\CAP_zzz\  (for a CAP)
	  MSWNET:["SMS_SITE=zzz"]\\ServerName\SMSPKGx$\<package directory name>\ (for a Distribution Point)
	
	RESOLUTION
	==========
	
	Microsoft has provided an update where NAL has the ability to resolve a
	preferred NAL path to a substring so you do not need to know the full NAL path
	in advance. You can add preferred server entries in the registry using the
	following form:
	
	  MSWNET:["SMS_SITE=zzz"]\\ServerName\  (for a CAP)
	  MSWNET:["SMS_SITE=zzz"]\\ServerName\ (for a Distribution Point)
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	
	The client files will be replicated to the CAPs and Logon Points. When this
	occurs the clients may be updated.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the files that
	are in this hotfix to be propagated to the clients. To speed up this process,
	you can stop and then restart the SMS Client Service on each client. You can
	also create a software distribution by using the Setevnt.exe or the Cliutils.exe
	Resource Kit tools. You must include the appropriate parameters to start a CCIM
	work cycle. For information about the proper syntax for these tools, see the
	Resource Kit documentation.
	
	To specify a preferred server on a client computer, follow these steps:
	
	1. To enable preferred server selection, at the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client
	
	  and add the value "Use Preferred Servers" with a Data Type of REG_DWORD
	
	  The REG_DWORD Data value should be set to "1".
	
	  Exported, the key would read as follows:
	
	  [HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client]
	  "Use Preferred Servers"=dword:00000001
	
	2. To create a list of preferred CAPs or DPs, the following registry keys must
	  be created:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client\Preferred AbExprtDB\CAP List
	  for site zzz
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client\Preferred AbExprtDB\DP List
	  for site zzz
	
	  where zzz = site code
	
	3. Under each key, list the NAL paths for each server using the following form:
	
	  MSWNET:["SMS_SITE=zzz"]\\ServerName\
	
	  You can use the Reskit utility PREFSERV to add these paths to the registry.
	  For information on the proper syntax to use with this tool, see the Resource
	  Kit documentation.
	
	
	4. If you intend to disable the other selection methods wait one CCIM cycle for
	  CCIM32 to validate the preferred CAP. Failure to do this results in the
	  client losing its means of gaining access to the CAP and its ability to
	  receive configuration changes and advertisments from the site.
	
	  To speed up this CCIM cycle, you can stop and restart the Systems Management
	  Server Client Service on each client. You can also create a software
	  distribution for the Setevnt.exe or Cliutils.exe tool in the Resource Kit
	  using the appropriate parameters to start a CCIM work cycle. For information
	  on the proper syntax to use with these tools, see the Resource Kit
	  documentation.
	
	  Once CCIM32 has valided the preferred CAP it will add a "PREFERRED" qualifier
	  to the NAL path for the CAP under the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client\AbExprtDB\CAP List for site
	  zzz
	
	  For example, if you use the following form:
	
	  MSWNET:["SMS_SITE=zzz", "PREFERRED"]\\ServerName\CAP_zzz
	
	  you can disable the other selection methods by adding the Use Existing
	  Connections = 0 (default is 1 enabled) and Use Random Path Selection = 0
	  (default is 1 enabled) values in the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client Exported the key would read
	  as follows:
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NAL\CLIENT]
	  "Use Existing Connections"= dword:00000000
	  "Use Random Path Selection"= dword:00000000
	
	When you advertise a package to a client, APM creates AbExprtDB entries on the
	fly under the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client\AbExprtDB\zzz0000x APM
	
	This happens when it receives the offer for each distribution point that the
	package was sent to. If any of those distribution points match the specified
	perferred distribution points then NAL adds the "PREFERRED" qualifier to that
	server's NAL path in the above key and selects a preferred server to use. When
	the package has been executed APM removes these registry keys.
	
	NOTE: If the package has been distributed to only one distribution point, these
	AbExprtDB entries are not created and the preferred server specification is
	ignored.
	
	
	Additional query words: prodsms prefserv
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
