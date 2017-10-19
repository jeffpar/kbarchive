---
layout: page
title: "Q252868: How Index Server Determines Query and Indexing Languages"
permalink: /kb/252/Q252868/
---

## Q252868: How Index Server Determines Query and Indexing Languages

	Article: Q252868
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Index Server determines language resources during the
	indexing and query process. The information in this article may be helpful if
	you use documents in different languages.
	
	MORE INFORMATION
	================
	
	Note that the language used during the indexing of a document may be different
	from the language settings used in a query. For example, if a document is
	indexed with the English settings, it may not be found if the query uses the
	German language settings. This is because, in this case, the query is processed
	with the German WBreakerClass, StemmerClass and noise-word list, but the
	document is processed with the English classes and noise-word list. Therefore,
	to receive the expected results when you query a catalog, always make sure that
	the indexing language of the documents matches the query language.
	
	How does Index Server determine the indexing language for an HTML document?:
	
	If the MetaTag MS.Local is not defined, the document is indexed with the language
	associated to system locale of the server. For example, to define the EN
	language, you can use the following statement in the Head section of the HTML
	document:
	
	  <META NAME="MS.Locale" CONTENT="EN">
	
	Note: To check the configured system locale, open Control Panel, and then select
	Regional Settings.
	
	How does Index Server determine the query language?:
	
	Index Server uses the following sequence to set the query language:
	
	1. The CiLocale configured in the query page. For more information about how to
	  set CiLocale, see the "Support for Multiple Languages" topic under the
	  Microsoft Index Server section in the NTOP documentation.
	
	
	2. The configured browser language preference, which is defined with
	  Http_Accept_Language in the browser. If more languages are configured, the
	  one with the highest priority (top of the list) is used.
	
	
	3. The language associated with the system locale on the server.
	
	Additional query words: CiLocale Ms.Locale LCID MSIDX Ixsso Http_Accept_Language ISOToLocaleID
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
