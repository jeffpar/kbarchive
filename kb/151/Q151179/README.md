---
layout: page
title: "Q151179: INFO: Configuring DNS on NT with CPS or During Unattended Setup"
permalink: kb/151/Q151179/
---

## Q151179: INFO: Configuring DNS on NT with CPS or During Unattended Setup

	Article: Q151179
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure Domain Name Service (DNS) information in Windows NT either
	during an unattended installation or with the Resource Kit Computer Profile
	Setup (CPS) utilities by modifying the Oemnxptc.inf file.
	
	For an unattended install using the winnt.exe /u:unattended.txt option, you have
	to copy the I386 directory from the compact disc. Once the I386 has been copied
	to a share point you can modify the Oemnxptc.inf.
	
	For CPS you can make the changes to the Oemnxptc.inf on the image that was
	created with Uplodprf.exe.
	
	MORE INFORMATION
	================
	
	After opening the Oemnxptc.inf, locate the following section and make the
	required modifications for your environment for DNS configuration.
	
	NOTE: The semicolons indicate commented lines and will not be read.
	
	  set RegistryErrorIndex = $($R0)
	
	          CloseRegKey $(TcpVersKeyHandle)
	          CloseRegKey $(TcpRulesKeyHandle)
	          LibraryProcedure ResultHostname $(!TCPCFG_HANDLE), ConvertHostname
	
	  $(!STF_COMPUTERNAME)
	  set NewValueList =
	  { {EnableDHCP,$(NoTitle),$(!REG_VT_DWORD),$(EnableDHCPFlag)},+
	  {DataBasePath,$(NoTitle),$(!REG_VT_EXPAND_SZ),
	  "%SystemRoot%\System32\drivers\etc"},+
	  ;
	  ;The Domain equates to the Domain Name in the GUI
	  ;Enter the Domain Name in between the quotes
	  ;Example: {Domain,$(NoTitle),$(!REG_VT_SZ),"xxxxxxxx.xxx"},+
	  {Domain,$(NoTitle),$(!REG_VT_SZ),""},+
	  ;
	  {Hostname,$(NoTitle),$(!REG_VT_SZ),$(ResultHostname)},+
	  ;
	  ;The NameServer equates to the DNS Search order in the GUI
	  ;Enter the IP Addresses between the quotes
	  ;Example: {NameServer,$(NoTitle),$(!REG_VT_SZ),"xxx.xxx.xxx.xxx
	  ;xxx.xxx.xxx.xxx xxx.xxx.xxx.xxx"},+
	  {NameServer,$(NoTitle),$(!REG_VT_SZ),""},+
	  ;
	  {ForwardBroadcasts,$(NoTitle),$(!REG_VT_DWORD),0},+
	  ;
	  {IPEnableRouter,$(NoTitle),$(!REG_VT_DWORD),0},+
	  ;
	  ;The SearchList equates to the Domain Suffix Search Order in the GUI
	  ;Enter the Domain Suffix between the quotes
	  ;Example: {SearchList,$(NoTitle),$(!REG_VT_SZ)," xxxxxxxx.xxx
	  ;xxxxxxxx.xxx xxxxxxxx.xxx"},+
	  {SearchList,$(NoTitle),$(!REG_VT_SZ),""} }
	
	          Shell  $(UtilityInf), AddValueList, $(TcpParmKeyHandle),
	
	  $(NewValueList)
	
	          CloseRegKey $(TcpParmKeyHandle)
	          Ifstr(i) $(RegistryErrorIndex) != NO_ERROR
	              CloseRegKey $(TcpLinkageHandle)
	              CloseRegKey $(TcpSvcKeyHandle)
	              EndWait
	              Debug-Output "OEMNXPTC.INF: Registry error: add value list."
	
	Additional query words: prodnt SBK OPK Install
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
