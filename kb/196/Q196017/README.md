---
layout: page
title: "Q196017: XWEB: Opening Attachments with Media Player Gives Error"
permalink: /kb/196/Q196017/
---

## Q196017: XWEB: Opening Attachments with Media Player Gives Error

{% raw %}

	Article: Q196017
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.02,4.0,4.01,4.01 Service Pack 1,5.5
	Operating System(s): 
	Keyword(s): kbProd2Web
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01, 4.01 Service Pack 1 for Windows 95 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01, 4.01 Service Pack 1 for Windows NT 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	After you log on to an Outlook Web Access (OWA) client and open a message with
	an attached .avi or .wav file, the attachment generates the following error:
	
	  Windows Media Player cannot open
	
	  'https://red-01-
	  http/exchange/Attach/read.asp?obj=00000000B6171E2FFD62CF11AC5800805F705D
	  780700510E38F0F350CF11AC4C00805F705D780000000039B4000053C1BD5F0C42D2118F
	  C700805F9F2EAC000001A4AF670000&att=ATT-0-
	  7406F825B175D2118FC800805F9F2EAC-cat.wav'.
	
	  Please verify that the path and filename are correct and try again.
	  (Error=8004406D)
	
	This only occurs using Internet Explorer and Windows Media Player version
	6.00.02.0902.
	
	CAUSE
	=====
	
	Internet Explorer does not store the session cookie when requesting the URL for
	the attachment. This causes a new session cookie to be generated when requesting
	the file. Because this new cookie is from a non-authenticated user, javascript
	code is returned rather than the attached file itself. Because Media Player does
	not understand javascript, it generates the above error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProd2Web 
	Technology        : kbOutlookSearch kbIEsearch kbZNotKeyword2 kbOWASearch kbIENT400Search kbIE95Search kbZNotKeyword3 kbOWA550 kbOWA550SP1 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE302WinNT400 kbIE400WinNT400 kbIE401WinNT400 kbIE401WinNT400SP1
	Version           : WINDOWS:3.02,4.0,4.01,4.01 Service Pack 1,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
