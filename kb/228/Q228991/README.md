---
layout: page
title: "Q228991: How to Create and Install an SSL Certificate in IIS 4.0"
permalink: kb/228/Q228991/
---

## Q228991: How to Create and Install an SSL Certificate in IIS 4.0

	Article: Q228991
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the creation and installation of an encryption key for
	Secure Sockets Layer (SSL) encryption on Internet Information Server (IIS)
	version 4.0. This article also assumes that there are no existing keys installed
	in IIS 4.0.
	
	MORE INFORMATION
	================
	
	Creating a Key:
	
	1. Open the Microsoft Management Console (MMC) for IIS.
	
	2. In the MMC, expand the Internet Information Server folder by clicking the
	  plus sign (+).
	
	3. Click the plus sign (+) sign next to the computer name.
	
	4. The Default Web Site should be available now. Right-click on the icon and
	  choose Properties.
	
	5. In the Default Web Site Properties, choose Directory Security.
	
	6. In the Secure Communications area of this property sheet, click the Key
	  Manager button.
	
	NOTE: If the button reads Edit instead of Key Manager, you already have an
	encryption certificate for the WWW Service installed.
	In Key Manager:
	
	1. Right-click the WWW icon and select Create New Key..
	
	2. The Create New Key dialog appears. You will see two configuration options in
	  this dialog. If Microsoft Certificate Server is installed, you will have the
	  option to send your key request directly to the Certificate Server. If you
	  want to send your Certificate to an online Certificate Authority (CA), choose
	  Put the request in a file that you will send to an authority. This example
	  assumes that an online CA will be used for Certificate signing. Select an
	  appropriate name and location.
	
	3. Fill out the next dialog. Key length available will depend on the level of
	  encryption on your version of Windows NT Server. Normally, domestic (US and
	  Canadian) versions of Windows NT will have 128 bit encryption available and
	  export versions of Windows NT will have 40 bit. The installation of Windows
	  NT Service Packs may effect this as service packs come in both 128 and 40 bit
	  versions.
	
	4. Continue filling out the dialog. The Common Name of the certificate MUST be
	  either the name of the Windows NT Server (if using WINS) or the Domain Name
	  of the server if on the Internet.
	
	NOTE: For every Web site that has a distinct DNS name, there must be an
	encryption key installed. However, each Web site for SSL MUST have a distinct IP
	address as well. SSL DOES NOT SUPPORT THE USE OF HOST HEADERS.
	
	5. Continue form completion with country, state and locality.
	
	6. Fill out the appropriate contact information and click Finish.
	
	7. Key Manager will display a key icon under the WWW icon. The key will have an
	  orange slash through it indicating it is not complete.
	
	8. Choose the Key menu and select Exit. Choose YES when asked to commit changes.
	
	NOTE: If you close Key Manager and do not commit the changes, the key will not
	function properly. If this occurs, delete the partial key in Key Manager and
	create the request again.
	Signing:
	
	1. Retrieve the text file created in Step 2 of the Key Manager section above.
	  This file contains the unsigned Public Key of your keyset. To enable
	  encryption, this key must be signed by a Certificate Authority.
	
	2. Depending on your Certificate Authority, you will have particular steps to
	  follow for signing of this file. Consult your Certificate Authority for
	  details.
	
	Installation:
	
	1. A text file will be created as the "signed" certificate.
	
	2. Follow the steps above to open Key Manager.
	
	3. Right-click the Partial Key icon and choose Install Key Certificate.
	
	4. Input the appropriate password.
	
	5. In the Server Bindings dialog, choose the appropriate settings. Any
	  Unassigned is fine if there is only one secure server. For multiples,
	  configure the appropriate IP address and/or port assignment.
	
	6. Close Key Manager and choose Commit Changes.
	
	SSL should now be functional on the Web server. When you access the Secure
	Communications area of IIS in the MMC, encryption settings will now be
	available. See the online documentation for details on configuration options.
	Points to be aware of:
	
	- There were a number of fixes for encryption in the Service Pack 3 time-frame.
	  It is recommended that Service Pack 4 be used on computer used for SSL
	  communications.
	
	- When you create new sites in the MMC for IIS, the SSL port is not
	  automatically configured. To do this, configure the Advanced area of the Web
	  site properties with Port 443. This is the default SSL protocol port.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
