---
layout: page
title: "Q237189: XFOR: Subject Prefix &quot;Re:&quot; Changes in CCMC"
permalink: /kb/237/Q237189/
---

## Q237189: XFOR: Subject Prefix &quot;Re:&quot; Changes in CCMC

	Article: Q237189
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If the post office language of the Microsoft Exchange Connector for Lotus
	cc:Mail (CCMC) is set to Japanese, when a cc:Mail user using an English cc:Mail
	client replies to a message sent by an Exchange Server user, the Subject prefix
	"Re:" is changed to a Japanese character.
	
	MORE INFORMATION
	================
	
	This behavior is by design. The CCMC has no way of knowing what language the
	client is using. It only knows the language of the cc:Mail post office. So if
	the cc:Mail post office is Japanese, the CCMC should replace "Re:" with the
	appropriate Japanese character.
	
	This scenario does not only occur on a Japanese post office, but also on other
	language versions. The prefix is replaced with a character of or term from that
	language. Even with an English CCMC, any subject with prefix "Re:" is changed to
	be "RE:".
	
	In addition, the CCMC uses the language that you select on the Post Office tab
	for all the status messages.
	
	MORE INFORMATION
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install a Japanese cc:Mail post office.
	
	2. Install a computer running Windows NT Server 4.0 SP4 with the Japanese
	  Language Pack.
	
	3. Set up an Exchange Server 5.5 Service Pack 2 computer with the CCMC and add
	  the Japanese locale.
	
	4. Configure the CCMC to connect to the Japanese cc:Mail post office, and set
	  the post office language of the CCMC to Japanese.
	
	5. Log on to Exchange Server and send a test message to a cc:Mail user,
	  "ccuser1", with a subject of "Test Message".
	
	6. Use English cc:Mail client to log on to the cc:Mail post office as "ccuser1"
	  and reply to the test message. The subject becomes "Re: Test Message".
	
	7. Log on to Exchange Server again. The subject of the reply message is "?:Test
	  Message". Using the Japanese client, you find the "Re" is replaced with a
	  Japanese character.
	
	The conversion takes place in the Ccmc\Src\Ccmc\Cc2ems.cpp file:
	
	  LPWSTR CCCtoEMS::pwszSubject( IN CCMailMessage *pccmm )
	
	  // If this is a reply or a reply to a reply set up the subject and
	  // normalized subject to ensure correct sort order on Exchange Make
	  // sure that if it talks and walks like a duck that it is a duck
	  // the format we're looking for is "Re[n]: Subject"
	  ......
	  // reset the subject and set up the NormalizedSubject
	       m_pwszNormalizedSubject	= WszDup (pwszPrefixEnd + 1);
	       m_pwszSubject = CCMC_NEW WCHAR [wcslen(g_rgpwsz[EXCHANGE_REPLY_PREFIX]) 
	          + wcslen (m_pwszNormalizedSubject) + 1];
	       wsprintf (m_pwszSubject, L"%s%s", g_rgpwsz[EXCHANGE_REPLY_PREFIX],
	          m_pwszNormalizedSubject);  
	       pccmm->hrSetSubject( m_pwszSubject );
	
	So the normalization of the subject is designed to fix the aforementioned
	"Re[n]:" problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
