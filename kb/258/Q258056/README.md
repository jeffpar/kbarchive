---
layout: page
title: "Q258056: XADM: Store Generates 3079s and 3084s When It Can't Rehome PFs"
permalink: /kb/258/Q258056/
---

## Q258056: XADM: Store Generates 3079s and 3084s When It Can't Rehome PFs

{% raw %}

	Article: Q258056
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Users who share data in public folders may not see the same data. Users who are
	on different servers may see two different sets of data even though all public
	folders are homed on a main public folder server. When you examine the Event
	Viewer, you may find the following error message logged in the application log:
	
	  EVENT ID: 3084
	  SOURCE: MSExchangeIS Public
	  CATEGORY: Replication Errors
	  DESCRIPTION:
	  Error (0x469) has occurred while processing the Owning Folders table.
	  /O='ORGANIZATION'/OU='SITE'/CN=RECIPIENTS//CN=PUBLICFOLDERNAME.
	
	Event ID 3084 is followed this error message:
	
	  EVENT ID: 3079
	  SOURCE: MSExchangeIS Public
	  CATEGORY: Replication Errors
	  DESCRIPTION:
	  Unexpected replication thread error 0x469.
	
	  EcGetFolderReplicas
	  RMS::EcGetStatusRequestResponders
	  RMS::EcPack
	  EcSendStatusRequestReplicaDeletePending
	  EcStartReplicaDeletePending
	  EcReplStateUpdate
	  FReplAgent
	
	NOTE: The error 0x469 is ecNoReplicaAvailable.
	
	When this error is logged, folders that are created with a name that falls
	alphabetically after PUBLICFOLDERNAME are not rehomed. Folders that are created
	with a name that falls alphabetically before PUBLICFOLDERNAME are correctly
	rehomed and users can see them properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	WORKAROUND
	==========
	
	On the mailbox server, point the private information store to the Site public
	folder server. You can use the Microsoft Exchange Server 5.5 Administrator
	program to do this. Click the server, and then click the Private Information
	Store object. Open the properties on this object, and on the General tab is an
	option to select the public folder server. Click the Site public folder server
	option rather than the mailbox server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To explain this issue a little better, some configuration information must be
	provided. The following represents a configuration where this issue can happen:
	
	  Site Public Folder = PFSERVER1
	  Mailbox Server = MBSERVER1
	  The mailbox server is configured with a public information store.
	  The mailbox server is configured to route locally for public folders.
	  All folders are homed on PFSERVER1.
	  Public Folder Name is PUBLICFOLDERINQUESTION
	
	If a user creates a public folder, the folder is actually created on the
	MBSERVER1's public information store. A background thread finds the folder and
	rehomes it. The issue is that this thread is using a folder table that is sorted
	alphabetically. It correctly rehomes folder until it gets an error. If it has an
	issue with the PUBLICFOLDERINQUESTION folder, the thread errors out and does not
	process the remaining folders. In this scenario, users on other servers besides
	MBSERVER1 see the folder on PFSERVER1. They can place data in the folder, and it
	may appear to work. However, users on the MBSERVER1 server see the local folder,
	and can place data in it. The folder is disjointed at this point, and users on
	different servers see different data.
	
	The resolution is to add logic to check for this condition, and rehome the folder
	properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
