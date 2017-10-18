---
layout: page
title: "Q174781: Key Storage File Invalid Msg. When Try to Recover a Certificate"
permalink: kb/174/Q174781/
---

## Q174781: Key Storage File Invalid Msg. When Try to Recover a Certificate

	Article: Q174781
	Product(s): Internet Information Server
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install or reinstall a certificate, you will get the following
	error message:
	
	  Key storage file is invalid.
	
	CAUSE
	=====
	
	When a certificate is installed on Internet Information Server (IIS), both an
	.Req (certificate request) file and a number of encrypted registry entries are
	created for the key pair.
	
	When you try to replace a certificate by just putting the .Req file back in
	place, you will get the above error message. It is necessary to have a backup of
	the complete private key and the request file to successfully reinstall the
	certificate.
	
	In order to successfully reinstall a certificate, a current and complete back up
	of the registry or a full certificate backup from within Key Manager is
	required.
	
	WORKAROUND
	==========
	
	To back up a certificate from within Key Manager, click Key, select Export File,
	then select Backup. This will generate a warning screen and then allow a
	complete certificate back up to be made.
	
	NOTE: The warning concerns the possibility that if someone else gets a copy of
	the complete certificate, they will be able to "spoof" or mimic the legitimate
	site. Appropriate security measures must be taken to ensure that the copy of the
	complete certificate is not available to non-authorized users.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300
	Version           : 3.00
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
