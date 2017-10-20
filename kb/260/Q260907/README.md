---
layout: page
title: "Q260907: Err Msg: Exchange MAPI Management Agent DAPIWrite Failed with..."
permalink: /kb/260/Q260907/
---

## Q260907: Err Msg: Exchange MAPI Management Agent DAPIWrite Failed with...

{% raw %}

	Article: Q260907
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you try to update a Microsoft
	Exchange server with custom recipients by using the Exchange MAPI management
	agent (MA). This error message is generated for all foreign entries that are
	being exported by that MA:
	
	  Error was encountered in function : HrDoImport calling DAPIWrite.. Error
	  message :
	
	  DAPIWrite for Mailbox
	  /o=mms/ou=charlotte/cn=recipients/cn=custom/cn=<User's Name>
	  [<username>@<Name.Domain>.com] failed with DAPI error 0xc000011e.
	
	CAUSE
	=====
	
	This behavior occurs because the distinguished name (DN) for the Exchange Custom
	Recipients container does not match the DN of the container on the Exchange
	server to which you are trying to push custom recipients. Because the display
	name and directory name of an object can be different in Exchange, it is
	important to note that the DN is built by using the object's directory name.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Log on to Microsoft Metadirectory Services (MMS) by using the Compass client.
	
	2. Click the Exchange MAPI MA for which the error messages are being generated.
	
	3. Click "Configure the Management Agent".
	
	4. Click the Custom Recipients tab.
	
	5. In the Custom Recipients Management section, verify that the "Exchange Custom
	  Recipient container distinguished name" entry matches the DN for the
	  container in which the custom recipients will reside on the Exchange server.
	
	To obtain the DN for the Exchange Custom Recipients container:
	
	1. Start the Exchange Server Administrator tool in Raw mode.
	
	2. Find and click the container that will hold the custom recipients.
	
	3. On the File menu, click Raw Properties to view the properties for the
	  Exchange object.
	
	4. Click the Obj-Dist-Name object attribute and note the attribute value. This
	  is the DN that you should use to populate the "Exchange Custom Recipient
	  container distinguished name" box.
	
	MORE INFORMATION
	================
	
	To Start Exchange Server Administrator in Raw Mode
	--------------------------------------------------
	
	WARNING: Using the Exchange Server Administrator tool in Raw mode (by using the
	"admin /r" command) incorrectly can cause serious problems that may require you
	to reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	Microsoft cannot guarantee that problems resulting from the incorrect use of Raw
	mode can be solved. Use Raw mode at your own risk.
	
	To start Exchange Server Administrator in Raw mode, type the following line at a
	command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
