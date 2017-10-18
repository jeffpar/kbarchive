---
layout: page
title: "Q244613: IIS 4.0 SSL ISAPI Filter Can Leak Single Buffer of Plaintext"
permalink: kb/244/Q244613/
---

## Q244613: IIS 4.0 SSL ISAPI Filter Can Leak Single Buffer of Plaintext

	Article: Q244613
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbDSupport kbIIS kbiis400 kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unencrypted data may appear in the Secure Sockets Layer (SSL) package under
	heavy load if an ISAPI filter is programmed in such a way that it sends and
	receives data at the same time for the same connection.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Sslune4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16186)
	
	  Alpha: DownloadDownload Sslune4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16187)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Version     Size    File name     Platform
	  -------------------------------------------------------------
	  10/26/99  10:09a   4.02.0728   329,024 Asp.dll       (x86)
	  10/26/99  09:18a   4.02.0728    11,396 Httpext.h     (x86)
	  10/26/99  10:07a   4.02.0728   184,736 Infocomm.dll  (x86)
	  10/26/99  10:08a   4.02.0728    11,248 Iwrps.dll     (x86)
	  10/26/99  10:08a   4.02.0728    38,256 Ssinc.dll     (x86)
	  10/26/99  10:08a   4.02.0728    25,360 Sspifilt.dll  (x86)
	  10/26/99  10:08a   4.02.0728   228,464 W3svc.dll     (x86)
	  10/26/99  10:07a   4.02.0728    87,504 Wam.dll       (x86)
	
	  10/26/99  10:09a   4.02.0728   549,648 Asp.dll       (Alpha)
	  10/26/99  09:22a   4.02.0728    11,396 Httpext.h     (Alpha)
	  10/26/99  10:07a   4.02.0728   303,888 Infocomm.dll  (Alpha)
	  10/26/99  10:08a   4.02.0728    16,656 Iwrps.dll     (Alpha)
	  10/26/99  10:08a   4.02.0728    60,176 Ssinc.dll     (Alpha) 
	  10/26/99  10:09a   4.02.0728    39,696 Sspifilt.dll  (Alpha)
	  10/26/99  10:08a   4.02.0728   383,760 W3svc.dll     (Alpha)
	  10/26/99  10:08a   4.02.0728   149,264 Wam.dll       (Alpha)
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: security_patch tsesrp iisapi, iissecurity, iisui
	
	======================================================================
	Keywords          : kbSecurity kbDSupport kbIIS kbiis400 kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
