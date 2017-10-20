---
layout: page
title: "Q251334: How to Remove Multiple Expired User Accounts from Windows NT"
permalink: /kb/251/Q251334/
---

## Q251334: How to Remove Multiple Expired User Accounts from Windows NT

{% raw %}

	Article: Q251334
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Server and the Windows NT 4.0 Resource Kit do not provide a way
	to remove expired accounts in Windows NT Domains automatically. You can use the
	Windows Scripting Host (WSH), Visual Basic Script (VBScript), and Active
	Directory Services Interface ADSI) to automate this process.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	MORE INFORMATION
	================
	
	You can run the following script from any computer that is logged onto a Domain
	with administrative privileges.
	
	Prerequisites
	-------------
	
	The following items are required to use the script in this article:
	
	- If you use Microsoft Windows 95, you are required to use Microsoft Internet
	  Explorer 4.0 or later with WSH and ADSI installed.
	
	- If you use Microsoft Windows 98, you are required to install ADSI and we
	  recommend you install the latest version of WSH.
	
	- If you use Windows NT, you are required to install Windows NT 4.0 Service
	  Pack 3 or later, Internet Explorer 4.0 or later, and ADSI.
	
	Sample Script DELEXPUSR.VBS
	---------------------------
	
	  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
	  '\\ 
	  '\\  DATE 1-14-2000
	  '\\ 
	  '\\  DELEXPUSR.VBS
	  '\\ 
	  '\\  Script is used to delete all user accounts on a domain in which the 
	  '\\  AccountExpirationDate has passed. Without using the /delete command it will only 
	  '\\  List the accounts that need to be deleted.
	  '\\ 
	  '\\  CSCRIPT DELEXPUSR.VBS domain /delete
	  '\\ 
	  '\\  domain  = Target Domain
	  '\\ 
	  '\\  /delete =  Delete will actually delete the user account from the same
	  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
	
	  dim objarg 
	  dim tDomain
	
	  set objarg = wscript.arguments
	
	  If objarg.count = 0 then
	  	Wscript.Echo "Domain Parameter Missing" 
	  	Wscript.quit
	  end if
	
	  'Command line args 
	  ptr = 0
	  testflag = true
	  Do until ptr  = objarg.count 	
	  select case ucase(objarg(ptr))
	  case "/DELETE"
	  	testflag = False 
	  end select
	  	ptr = ptr +1
	  Loop
	
	  tdomain = objarg(0)
	
	  set oDom = GetObject("WinNT://" & tdomain & ",domain")
	  oDom.filter = Array("User")
	
	  On Error Resume Next
	
	  'Look through each user record if account is expired delete the account
	  For each oUser in Odom 	
	  	tAccountexp = oUser.AccountExpirationDate	
	  	if err <> 0 then
	  		tAccountexp = 1
	  	else
	  		tAccountexp = oUser.AccountExpirationDate
	  	end if
	  	err.clear
	
	  	'compare the result to today;  if result is negative then tAccountexp is later than
	  	'today.
	  	if tAccountexp = 1 then
	  		result = 1
	  	else
	  		result = DateDiff("d",now,tAccountexp)
	  	end if 
	  	if result < 0 then 
	  		if ouser.name <> "Administrator" or ouser.name <> "Admin" then
	  			' insert check here later for testing for membership to Domain Admins group
	  			if testflag then
	  				wscript.echo "User: " & ouser.name & ". Expiration: " & oUser.accountexpirationdate 
	  			else
	  				wscript.echo "Deleting User: " & ouser.name & ". Expiration: " & oUser.accountexpirationdate
	  				call oDom.delete("User",ouser.name) ' Delete the user the date is in the past
	  			end if 
	  		end if
	  	else 
	  		wscript.echo "User: " & oUser.name & " - Account Current"
	  	end if
	  next
	
	This script is designed to be used on a Windows NT 4.0 domain. It is not designed
	or intended to be used on a Microsoft Windows 2000 domain.
	
	REFERENCES
	==========
	
	For more information about Active Directory Services Interface (ADSI) and where
	to download it, click the following link:
	
	  http://www.microsoft.com/windows2000/techinfo/howitworks/activedirectory/adsilinks.asp
	
	For more information about Windows Scripting Host (WSH) and Scripting Languages,
	click the following link:
	
	  http://msdn.microsoft.com/scripting/default.htm?/scripting/start.htm
	
	To download Internet Explorer, click the following link:
	
	  http://www.microsoft.com/ie
	
	To download Windows NT Services, click the following link:
	
	  http://www.microsoft.com/Windows/ServicePacks
	
	Additional query words: KBHOWTO Delete remove multiple expired user accounts WSH ADSI
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinNTSEnt400SP6a kbWin98SE
	Version           : :4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
