---
layout: page
title: "Q263641: XCON: Exchange Connector for Novell GroupWise Incorrectly Transl"
permalink: /kb/263/Q263641/
---

## Q263641: XCON: Exchange Connector for Novell GroupWise Incorrectly Transl

	Article: Q263641
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Connector for Novell GroupWise, you may
	experience problems converting Nordic characters. For example, if you send a
	message that contains Nordic characters from Microsoft Outlook 2000 through an
	Exchange Server 5.5 computer to a GroupWise recipient, when by the GroupWise
	client receives the message, the characters are not translated properly. This
	problem also occurs if a message that contains Nordic characters is sent from a
	GroupWise client to an Outlook 2000 recipient through an Exchange Server 5.5
	computer.
	
	CAUSE
	=====
	
	This problem can occur for the following reasons, all of which need to addressed
	for messages to be received correctly both on Exchange Server and GroupWise:
	
	- The GroupWise postoffice needs to have the code page 850 translation tables
	  installed for the application programming interface (API) gateway. For
	  further information, contact Novell Technical Support.
	
	- The following parameter needs to be added to the [LME-GWISE] section in the
	  Exchconn.ini file in the Exchsrvr\Connect\Exchconn folder:
	
	  GWCodePage=850
	
	  This parameter forces the gateway to use code page 850 for character
	  translation to and from Exchange Server. You must restart the Exchange
	  Connector for Novell GroupWise for this change to take effect.
	
	- The default locale on the Exchange Server computer needs to be changed to a
	  Nordic code page, for example, Norwegian or Swedish.
	
	
	If you correctly implement the preceding three changes, you can solve most
	character translation problems. However, you may still experience problems with
	the combined character "AE" or "ae" (produced by ALT+0198 for the uppercase
	character or ALT+0230 for the lowercase character). These single characters may
	be translated to two characters, "AE" and "ae", respectively. To resolve this
	problem, apply the fix in the "Resolution" section of this article. This fix
	needs to be applied in conjunction with the preceding three changes.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Connector for Novell GroupWise
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dispatch.exe | 5.5.2652.44 | 
	+----------------------------+
	| Gw2mex.exe   | 5.5.2652.44 | 
	+----------------------------+
	| Gwrouter.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsdiajcl.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsdiamex.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsdiavm.exe  | 5.5.2652.44 | 
	+----------------------------+
	| Lsdxa.exe    | 5.5.2652.44 | 
	+----------------------------+
	| Lsmexdia.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsmexin.exe  | 5.5.2652.44 | 
	+----------------------------+
	| Lsmexnts.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsntsmex.exe | 5.5.2652.44 | 
	+----------------------------+
	| Lsvmdia.exe  | 5.5.2652.44 | 
	+----------------------------+
	| Mex2gw.exe   | 5.5.2652.44 | 
	+----------------------------+
	| Ctreestd.dll | 5.5.2652.44 | 
	+----------------------------+
	| Dxagwise.dll | 5.5.2652.44 | 
	+----------------------------+
	| Dxamex.dll   | 5.5.2652.44 | 
	+----------------------------+
	| Dxanotes.dll | 5.5.2652.44 | 
	+----------------------------+
	| Exconmsg.dll | 5.5.2652.44 | 
	+----------------------------+
	| Gwhc.dll     | 5.5.2652.44 | 
	+----------------------------+
	| Lscms.dll    | 5.5.2652.44 | 
	+----------------------------+
	| Lsldew.dll   | 5.5.2652.44 | 
	+----------------------------+
	| Lsmexhc.dll  | 5.5.2652.44 | 
	+----------------------------+
	| Lsmexif.dll  | 5.5.2652.44 | 
	+----------------------------+
	| Lsntshc.dll  | 5.5.2652.44 | 
	+----------------------------+
	| Lsqview.dll  | 5.5.2652.44 | 
	+----------------------------+
	| Lsvmhc.dll   | 5.5.2652.44 | 
	+----------------------------+
	| Lsxfm.dll    | 5.5.2652.44 | 
	+----------------------------+
	| Ntsperf.dll  | 5.5.2652.44 | 
	+----------------------------+
	| Ntspxgen.dll | 5.5.2652.44 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
