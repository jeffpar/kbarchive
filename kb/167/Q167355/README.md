---
layout: page
title: "Q167355: FIX: C4786 Warning Is Not Disabled with #pragma Warning"
permalink: kb/167/Q167355/
---

## Q167355: FIX: C4786 Warning Is Not Disabled with #pragma Warning

	Article: Q167355
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Warnings similar to the following are generated even if you use the warning
	pragma to disable the warning:
	
	  warning C4786:
	  'std::rb_tree<CAiSpanningTree<State,std::less<State>>::TransClosureNode,
	  CAiSpanningTree<State,std::less<State>>::TransClosureNode,std::ident<Cai
	  SpanningTree<State,std::less<State>>::TransClosureNode,CAiSpanningTree<S
	  tate,std::less<State>>::TransClosureNode>,std::less<CAiSpanningTree<Stat
	  e,std::less<State>>::TransClosureNode>>' : identifier was
	  truncated to '255' characters in the debug information
	
	The code:
	
	     #pragma warning(disable:4786)
	
	disables warnings that list the file and line number. For example:
	
	  C:\test\Text.cpp(25) : warning C4786:
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	This warning can be ignored. However, the identifier may not be accessible or
	viewable in the debugger.
	
	Sample Code
	-----------
	
	     /*
	     Compiler Options: /Zi
	     */ 
	
	     #include <stddef.h>
	     #include <new.h>
	     #pragma warning(disable:4786)
	
	     namespace std {
	
	        template <class T, class U>  struct ident {};
	        template <class T1, class T2> struct pair {};
	        template <class Arg1, class Arg2, class Result>
	           struct binary_function {};
	        template <class T>struct less : binary_function<T, T, bool> {};
	        template <class T, class Distance> struct bidirectional_iterator {};
	        template <class Key, class Value, class KeyOfValue, class Compare>
	          class rb_tree {
	            public:
	               typedef int size_type;
	               typedef int difference_type;
	               typedef void* link_type;
	               struct rb_tree_node {};
	               typedef Key key_type;
	               class iterator : public bidirectional_iterator<Value,
	                  difference_type> {};
	               class const_iterator   : public
	                  bidirectional_iterator<Value,difference_type> {
	                      protected:
	                      link_type node;
	                      const_iterator(link_type x) : node(x) {}
	               };
	               public:
	                  size_type count(const key_type& x) const;
	               };
	          template <class Key, class Value, class KeyOfValue,
	                   class Compare>
	                   rb_tree<Key, Value, KeyOfValue, Compare>::size_type
	                   rb_tree<Key, Value, KeyOfValue, Compare>::
	                   count(const Key& k) const {
	                      size_type n = 0;
	                      return n;
	               };
	               template <class Key, class Compare>   class set {
	                 typedef ::std::rb_tree<Key, Key,ident<Key, Key>, Compare>
	                   rep_type;
	            rep_type t;
	       };
	
	     }
	
	     template <class Node, class Compare>class CAiTransitiveClosure{
	     public:
	
	        typedef std::set<Node, Compare > NodeSet; NodeSet m_todo;
	
	     };
	
	     template <class Node, class Compare> class CAiSpanningTree {
	     public:
	
	        typedef std::set<Node, Compare > NodeSet;
	
	     protected:
	
	        typedef Node CAiSpanningTreeNode;
	        typedef NodeSet CAiSpanningTreeNodeSet;
	
	     private:
	
	        struct TransClosureNode {};
	        struct TransClosureGraph
	          : public CAiTransitiveClosure<TransClosureNode,
	
	     std::less<TransClosureNode> > 
	
	        {};
	
	     public:
	
	        CAiSpanningTree(const Node& initialNode);
	        CAiSpanningTree(const NodeSet& initialNodes);
	
	     };
	
	     struct State { };
	     class CformSpanningTree:public CAiSpanningTree<State,std::less<State>>
	     {
	     public:
	
	         CFormSpanningTree( NodeSet initial)
	        : CAiSpanningTree<State, std::less<State> >(initial)
	        {}
	
	     };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
