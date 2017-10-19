---
layout: page
title: "Q294833: ASP Script Cannot Use Type Libraries with UTF8 Codepage"
permalink: /kb/294/Q294833/
---

## Q294833: ASP Script Cannot Use Type Libraries with UTF8 Codepage

	Article: Q294833
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Active Server Pages (ASP) script sets its codepage to UTF8 and
	references a type library by its globally unique identifier (GUID), it returns
	an E_OUTOFMEMORY error. The client receives a 500 server internal error. This is
	the sample script:
	
	  <%@ LANGUAGE=VBScript CODEPAGE=65001%>
	  <!--METADATA NAME="Microsoft ActiveX Data Objects 2.5 Library" TYPE="TypeLib" 
	      UUID="{00000205-0000-0010-8000-00AA006D2EA4}"-->
	
	CAUSE
	=====
	
	This problem occurs because Internet Information Services (IIS) 5.0 uses the
	incorrect codepage for file names that are read from the registry.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  English (US):
	  Download Download Q249831_w2k_sp3_x86_EN.exe now
	
	  Chinese (Simplified):
	  Download Download Q249831_w2k_sp3_x86_CN.exe now
	
	  Chinese (Traditional):
	  Download Download Q249831_w2k_sp3_x86_TW.exe now
	
	  French:
	  Download Download Q249831_w2k_sp3_x86_FR.exe now
	
	  German:
	  Download Download Q249831_w2k_sp3_x86_DE.exe now
	
	  Japanese:
	  Download Download Q249831_w2k_sp3_x86_JA.exe now
	
	  Korean:
	  Download Download Q249831_w2k_sp3_x86_KO.exe now
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version         Size     File name
	  --------------------------------------------------------
	  5/31/2001   03:31p   5.0.2195.3649  332,560  Asp.dll
	  5/31/2001   03:31p   5.0.2195.3649   13,584  Infoadmn.dll 
	  5/31/2001   03:31p   5.0.2195.3649  245,520  Infocomm.dll
	  5/31/2001   03:31p   5.0.2195.3649   62,736  Isatq.dll
	  5/31/2001   03:32p   5.0.2195.3649     7440  W3ctrs.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For additional information about what else this patch fixes, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q294831 Server.HTMLEncode and Server.URLEncode Corrupt High UTF8 Characters
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: kbIISCom UTF-8
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
